import { browser } from '$app/environment';

export const normalizeKey = (os: string, key: string): string => {
	if (os === 'mac' && key === 'Meta') return 'Control';
	if (os !== 'mac' && key === 'Control') return 'Control';
	return key;
};

export const detectOS = () => {
	if (!browser) return 'unknown';
	const userAgent = window.navigator.userAgent;

	if (userAgent.includes('Windows')) {
		return 'windows';
	} else if (userAgent.includes('Mac')) {
		return 'mac';
	} else if (userAgent.includes('Linux')) {
		return 'linux';
	}
	return 'unknown';
};
