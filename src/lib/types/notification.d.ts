type Notification = {
	id: string; // The id of the notification.
	type: string; // The type of the notification.
	lastTriggered: Number; // The last time the notification was triggered.
	displayTimeSec: Number; // The time the notification should be displayed in seconds.
	miniTimeSec: Number; // The time the notification should be minimized in seconds.
	closeable: boolean; // If the notification can be closed.
	miniable: boolean; // If the notification can be minimized.
	title: string; // The title of the notification.
	comment: string; // The comment of the notification.
	camId: Number; // The id of the camera.
	actions: Array<any>; // The actions of the notification.
};

export default Notification;
