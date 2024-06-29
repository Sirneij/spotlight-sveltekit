export interface End {
	label: string;
	dateTime: string | null | undefined;
}

export interface Resume {
	company: string;
	title: string;
	logo: string;
	start: string;
	end: string | End;
}
