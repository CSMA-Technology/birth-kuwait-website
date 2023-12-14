import { getAllEventTypes, transformForEventPanel } from '$lib/server/calendarUtils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const allEventTypes: Array<Calendly.EventTypeData> = await getAllEventTypes();
	const lectureEventData = transformForEventPanel(
		allEventTypes.filter((eventType) => eventType.tags.includes('lecture'))
	);
	const workshopEventData = transformForEventPanel(
		allEventTypes.filter((eventType) => eventType.tags.includes('workshop'))
	);
	return {
		lectureEventData,
		workshopEventData
	};
}) satisfies PageServerLoad;
