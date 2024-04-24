import { derived, writable } from 'svelte/store';
import state from '../defaultState';
import categoryHandler from './category_handler';
import { PUBLIC_ROTOCLEAR_IP } from '$env/static/public';

class WebSocketConnection {
	/**
	 * @type {string} url - The URL of the WebSocket server.
	 **/
	url;
	/**
	 * @type {WebSocket | undefined} socket - The WebSocket connection.
	 */
	socket;
	/**
	 * @type {Object.<string, import('svelte/store').Writable<any>>} stores - The writable stores for the WebSocket channels.
	 */
	stores;
	/**
	 * @type {import('../defaultState').State} defaultState - The default state for the stores.
	 */
	defaultState;
	/**
	 * @type {Array.<string | ArrayBufferLike | Blob | ArrayBufferView>} messageStack - The stack of messages to send when the WebSocket connection opens.
	 */
	messageStack;

	/**
	 * The number of times the WebSocket connection has been retried.
	 * @type {number}
	 */
	retryCount = 0;

	/**
	 * The store that holds the retry count for WebSocket connection.
	 * @type {import('svelte/store').Writable<number>}
	 */
	retryCountStore = writable(0);

	/**
	 * Indicates whether the WebSocket is currently connected.
	 * @type {import('svelte/store').Writable<boolean>}
	 */
	connected = writable(false);

	/**
	 * Represents a WebSocket connection.
	 * @class
	 * @param {string} url - The URL of the WebSocket server.
	 * @typedef {(data: any, ws: WebSocketConnection) => any} MiddlewareFunction - The middlewares for the WebSocket connection.
	 * @param {Array.<MiddlewareFunction>} [middlewares=[]] - The middlewares for the WebSocket connection.
	 * @param {import('../defaultState').State} [defaultState={}] - The default state for the WebSocket connection.
	 */
	constructor(url, middlewares = [], defaultState = state) {
		this.url = url;
		this.socket = undefined;
		this.stores = {};
		this.defaultState = defaultState;
		this.messageStack = [];
		this.middlewares = middlewares;
	}

	/**
	 * Connects to the WebSocket server.
	 */
	connect() {
		this.socket = new WebSocket(this.url);
		this.socket.addEventListener('open', this._onStateChange.bind(this));
		this.socket.addEventListener('message', this._onMessage.bind(this));
		this.socket.addEventListener('error', this._onError.bind(this));
		this.socket.addEventListener('close', this._onClose.bind(this));
		this.set('getClientSettings', 'get all configurations for the client');
	}

	/**
	 * Handles the incoming WebSocket message.
	 *
	 * @param {MessageEvent} event - The WebSocket message event.
	 */
	_onMessage(event) {
		let data = JSON.parse(event.data);
		this.middlewares.forEach((middleware) => {
			data = middleware(data, this);
		});
		Object.keys(data).forEach((key) => {
			if (!this.stores[key]) {
				this.stores[key] = writable(this.defaultState[key]);
			}
			this.stores[key].set(data[key]);
		});
	}

	_onStateChange() {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			this.connected.set(true);
			this.setRetryCount(0);
			this.messageStack.forEach((message) => {
				this.socket?.send(message);
			});
			this.messageStack = [];
		}
	}

	/**
	 * Handles the error event for the WebSocket connection.
	 *
	 * @param {Event} event - The error event object.
	 * @returns {void}
	 */
	_onError(event) {
		console.error(event);
		this.socket?.close();
	}

	/**
	 * Handles the 'close' event of the WebSocket connection.
	 * @param {Event} event - The 'close' event object.
	 */
	_onClose(event) {
		this.socket?.removeEventListener('close', this._onClose.bind(this));
		this.socket?.removeEventListener('error', this._onError.bind(this));
		console.error(event);
		this.connected.set(false);
		this.setRetryCount(this.retryCount + 1);
		setTimeout(() => {
			this.connect();
		}, 1000);
	}

	_recursiveRetry() {
		if (this.retryCount < 5 && this.socket?.readyState !== WebSocket.OPEN) {
			setTimeout(() => {
				this.connect();
			}, 1000);
		}
	}

	/**
	 * Subscribes to a WebSocket store.
	 *
	 * @param {string} key - The key of the store.
	 * @param {import('svelte/store').Subscriber<any>} run - The function to be executed when the store updates.
	 * @returns {Function} - A function to unsubscribe from the store.
	 */
	subscribe(key, run) {
		if (!this.stores[key]) {
			this.stores[key] = writable(this.defaultState[key]);
		}
		return this.stores[key].subscribe(run);
	}

	/**
	 * Sends data to the WebSocket server.
	 *
	 * @param {Object} data - The data to send.
	 */
	send(data) {
		if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
			this.messageStack.push(JSON.stringify(data));
			return;
		}
		this.socket.send(JSON.stringify(data));
	}

	/**
	 * Sets a specific value on the server.
	 *
	 * @param {string} key - The key of the value to set.
	 * @param {any} value - The value to set.
	 */
	set(key, value) {
		this.send({ [key]: value });
	}

	/**
	 * @param {string | number} key
	 * @returns {import('svelte/store').Writable<any>}
	 */
	get(key) {
		if (!this.stores[key]) {
			this.stores[key] = writable(this.defaultState[key]);
		}
		return this.stores[key];
	}
	/**
	 *
	 * @returns {import("svelte/store").Readable<import("$lib/types/notification").default[]>}
	 */
	getNotifications() {
		/**
		 * @type {import("svelte/store").Writable<import("$lib/types/notification").default>[]}
		 */
		const notifications = Object.keys(this.defaultState)
			.filter((key) => key.startsWith('notify'))
			.map((key) => this.get(key));
		return derived(notifications, (stores) => {
			// console.log($stores);
			return stores;
		});
	}

	/**
	 * @param {string | number} key
	 */
	has(key) {
		return this.stores[key] !== undefined;
	}

	/**
	 * @param {string | number} key
	 * @param {any} value
	 */
	setLocal(key, value) {
		if (!this.stores[key]) {
			this.stores[key] = writable(this.defaultState[key]);
		}
		this.stores[key].set(value);
	}

	/**
	 * Closes the WebSocket connection.
	 */
	close() {
		if (!this.socket) {
			return;
		}
		this.socket.close();
	}

	/**
	 * Gets the current ready state of the WebSocket connection.
	 *
	 * @returns {number} - The ready state of the WebSocket connection.
	 */
	get readyState() {
		if (!this.socket) {
			return WebSocket.CLOSED;
		}
		return this.socket.readyState;
	}

	/**
	 * @param {number} count
	 */
	setRetryCount(count) {
		this.retryCount = count;
		this.retryCountStore.set(count);
	}
}

export const ws = new WebSocketConnection(`ws://${PUBLIC_ROTOCLEAR_IP}/rc-client`, [
	categoryHandler
]);

export default WebSocketConnection;
