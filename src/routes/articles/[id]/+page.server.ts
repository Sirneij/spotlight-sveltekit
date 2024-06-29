import type { PageServerLoad } from './$types';
import { article } from '$lib/utils/dummy';

export const load: PageServerLoad = async () => {
	return {
		article: await article()
	};
};
