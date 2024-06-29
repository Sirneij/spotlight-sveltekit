export interface Author {
	name: string;
	avatar: string;
}

export interface User {
	email: string;
	first_name: string;
	last_name: string;
	id: string;
	is_staff: boolean;
	is_active: boolean;
	thumbnail: string;
	is_superuser: boolean;
	date_joined: string;
}