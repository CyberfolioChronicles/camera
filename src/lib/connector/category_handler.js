/**
 * Handles a message from the websocket.
 * @param {any} data - The current data.
 * @param {import('./websocket').default} connection - The reference to the WebSocketConnection object.
 * @returns {any} - The updated data for the next middleware.
 */
export default function handleMessage(data, connection) {
	if (Object.prototype.hasOwnProperty.call(data, 'changeTagCategory')) {
		/**
		 * Handles the change of tag category.
		 * @type { import("$lib/types/changeTagCategory").ChangeTagCategory } - The new tag category.
		 */
		const changeTagCategory = data.changeTagCategory;
		// Update the categories store based on the content of changeTagCategory object
		const categoryId = changeTagCategory.id;
		const category = {
			name: changeTagCategory.name,
			color: changeTagCategory.color
		};
		const categories = connection.get('categories');
		switch (changeTagCategory.action) {
			case 'create':
			case 'update':
				categories.update((value) => {
					value[categoryId] = category;
					return value;
				});
				break;
			case 'delete':
				// Handle delete action
				categories.update((value) => {
					delete value[categoryId];
					return value;
				});
				break;
			default:
				// TODO: Show Logger message
				break;
		}
		connection.setLocal('categories', categories);
		delete data.changeTagCategory;
	}
	return data;
}
