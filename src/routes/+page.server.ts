import { getAllEventTypes, transformForEventPanel } from '$lib/server/calendarUtils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	try {
		const allEventTypes: Array<Calendly.EventTypeData> = await getAllEventTypes();
		const featuredEventData = transformForEventPanel(
			allEventTypes.filter((eventType) => eventType.tags.includes('featured'))
		);
		// If allEventTypes is not empty but featuredEventData is empty, then there are no featured events - return top 3 events
		if (allEventTypes.length > 0 && featuredEventData.length === 0) {
			return {
				featuredEventData: transformForEventPanel(allEventTypes.slice(0, 3))
			};
		}
		return {
			featuredEventData
		};
	} catch (error) {
		console.error(error);
		return {
			featuredEventData: []
		};
	}
}) satisfies PageServerLoad;
