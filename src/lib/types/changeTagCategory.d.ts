import { Action } from './action';

export type ChangeTagCategory = {
	action: Action;
	id: number;
	name: string;
	color: string;
};
