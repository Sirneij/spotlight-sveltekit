/**
 * Dynamically imports a component
 * @file src/lib/utils/helpers/dynamicComponents.ts
 * @param {string} componentName - The name of the component to import
 * @param {string} type - The type of component to import
 * @returns {Promise} - The imported component
 */
export const getComponent = async (componentName: string, type: string = 'html'): Promise<any> => {
	const componentNameCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);
	const component = await import(`$lib/components/${type}/${componentNameCapitalized}.svelte`);
	return component.default;
};
