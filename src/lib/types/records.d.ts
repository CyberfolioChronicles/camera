enum MediaTypes {
	IMAGE = 'image',
	VIDEO = 'video',
	TIMELAPS = 'timelaps',
	SLOMO = 'slomo'
}
enum MediaFormat {
	JPG = 'jpg',
	JPEG = 'jpeg',
	PNG = 'png',
	SVG = 'svg',
	MP4 = 'mp4',
	AVI = 'avi'
}
export type Media = {
	id: number;
	type: MediaTypes;
	media_type: MediaFormat;
	startTimestampMs: number;
	endTimestampMs: number;
	durationMs: number;
	filename: string;
	size: number; // in bytes
};

export type Tag = {
	id: number;
	category: number;
	title: string;
	note: string;
	timestamp: number;
};

export type Records = {
	startTimestampMs: number;
	endTimestampMs: number;
	media: Array<Media>;
	backup: Array<Media>;
	tags: Array<Tag>;
};
