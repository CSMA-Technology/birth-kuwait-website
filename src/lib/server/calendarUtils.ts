import { CALENDLY_API_TOKEN, CALENDLY_API_URL, CALENDLY_USER_URI } from '$env/static/private';

const AUTH_HEADER = `Bearer ${CALENDLY_API_TOKEN}`;

export const getEventDetails = async (eventUuid: string) => {
	const eventTypeResponse = await fetch(`${CALENDLY_API_URL}/event_types/${eventUuid}`, {
		method: 'GET',
		headers: {
			Authorization: AUTH_HEADER,
			'Content-Type': 'application/json'
		}
	});
	if (!eventTypeResponse.ok) {
		if (eventTypeResponse.status === 404) {
			throw new Error('Event not found');
		} else {
			throw new Error(`Failed to fetch event details. Status: ${eventTypeResponse.status}`);
		}
	}
	const eventTypeData: Calendly.EventTypeData = (await eventTypeResponse.json()).resource.map(mapCalendlyEventType);
	return eventTypeData;
};

export const getAllEventTypes = async () => {
	const eventTypesResponse = await fetch(`${CALENDLY_API_URL}/event_types?user=${CALENDLY_USER_URI}`, {
		method: 'GET',
		headers: {
			Authorization: AUTH_HEADER,
			'Content-Type': 'application/json'
		}
	});
	if (!eventTypesResponse.ok) {
		if (eventTypesResponse.status === 404) {
			throw new Error('No events found');
		} else {
			throw new Error(`Failed to fetch event details. Status: ${eventTypesResponse.status}`);
		}
	}
	const allEventTypesData: Array<Calendly.EventTypeData> = (await eventTypesResponse.json()).collection.map(
		mapCalendlyEventType
	);
	return allEventTypesData;
};

// TODO: This is for the a list view of upcoming scheduled events on the Upcoming Events Page TBA
export const getScheduledEvents = async () => {
	const scheduledEventsResponse = await fetch(
		`${CALENDLY_API_URL}/scheduled_events?user=${CALENDLY_USER_URI}&sort=start_time:asc`,
		{
			method: 'GET',
			headers: {
				Authorization: AUTH_HEADER,
				'Content-Type': 'application/json'
			}
		}
	);
	if (!scheduledEventsResponse.ok) {
		if (scheduledEventsResponse.status === 404) {
			throw new Error('Event not found');
		} else {
			throw new Error(`Failed to fetch event details. Status: ${scheduledEventsResponse.status}`);
		}
	}
	// const scheduledEventsResponseJson = await scheduledEventsResponse.json();
};

const extractTags = (text: string): string[] => {
	const hashtagRegex = /#(\w+)/g;
	const matches = text.match(hashtagRegex);
	return matches ? matches.map((match) => match.substring(1).toLowerCase()) : [];
};

const mapCalendlyEventType = (eventTypeData): Calendly.EventTypeData => {
	return {
		active: eventTypeData.active,
		name: eventTypeData.name,
		description: eventTypeData.description_plain ?? '',
		schedulingUrl: eventTypeData.scheduling_url,
		internalNote: eventTypeData.internal_note ?? '',
		tags: extractTags(eventTypeData.internal_note ?? ''),
		uid: eventTypeData.uri.split('/').pop(),
		duration: eventTypeData.duration + ' min'
	};
};

export const transformForEventPanel = (events: Calendly.EventTypeData[]) => {
	return events.map((event: Calendly.EventTypeData) => ({
		id: event.uid,
		title: event.name,
		description: event.description,
		bookingLink: event.schedulingUrl,
		duration: event.duration
	}));
};
