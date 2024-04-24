/**
 * Merges the current media records with new media records based on their IDs.
 * If a matching media record is found in the new media, it replaces the corresponding record in the current media.
 * If a matching media record is not found, it is added to the current media.
 * @template {import("$lib/types/withId").default} A
 * @param {Array<A>} currentA - The array of current media records.
 * @param {Array<A>} newA - The array of new media records.
 * @returns {Array<A>} - The updated array of current media records.
 */
function mergeRecordsById(currentA, newA) {
	currentA
		.map((media) => {
			// Update media which are already in the store
			// TODO: Is it possible that this data is different from the data in the store?
			const matchingMedia = newA.find((nm) => nm.id === media.id);
			if (matchingMedia) {
				return matchingMedia;
			} else {
				return media;
			}
		})
		// Add new media to the store
		.concat(newA.filter((m) => !currentA.some((cm) => cm.id === m.id)));
	return currentA;
}

/**
 * Handles a message from the websocket.
 * @param {any} data - The current data.
 * @param {import('./websocket').default} connection - The reference to the WebSocketConnection object.
 * @returns {any} - The updated data for the next middleware.
 */
export default function handleMessage(data, connection) {
	if (Object.prototype.hasOwnProperty.call(data, 'records')) {
		/**
		 * @type {import('$lib/types/records').Records}
		 */
		const records = data.records;
		/**
		 * Represents the writable object for the current records.
		 * @type {import('svelte/store').Writable<import('$lib/types/records').Records>}
		 */
		const currentRecordsWritable = connection.get('records');
		currentRecordsWritable.update((currentRecords) => {
			currentRecords.media = mergeRecordsById(currentRecords.media, records.media);
			currentRecords.backup = mergeRecordsById(currentRecords.backup, records.backup);
			currentRecords.tags = mergeRecordsById(currentRecords.tags, records.tags);
			return currentRecords;
		});
		delete data.records;
	}
	return data;
}
