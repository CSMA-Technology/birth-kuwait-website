// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare global {
	namespace Calendly {
		interface EventTypeData {
			active: boolean;
			description: string;
			name: string;
			schedulingUrl: string;
			internalNote: string;
			uid: string;
			duration: string;
			tags: string[];
		}
	}
}

export { };