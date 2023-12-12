import { getAllEventTypes, transformForEventPanel } from "$lib/server/calendarUtils";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const allEventTypes: Array<Calendly.EventTypeData> = await getAllEventTypes();
  const trainingEventData = transformForEventPanel(allEventTypes.filter(eventType => eventType.internalNote.toLowerCase().includes('training')));
  return {
    trainingEventData,
  };
}) satisfies PageServerLoad;