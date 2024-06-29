import type { Author } from './user.interface';

export interface CommentType {
	id: string;
	text: string;
	author: Author;
	date: string;
	dateFormatted: string;
	replies: CommentType[];
}
