export interface NewTag {
	name: string;
	description: string;
}
export interface UpdateTag {
	name?: string;
	description?: string;
}

export interface Tag extends NewTag {
	id: string;
}
