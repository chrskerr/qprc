import type { APIRoute } from "astro";
import { EventAttributes, createEvents } from "ics";
import { getIcsDateArray } from "../lib/dates";

import { addDays } from "date-fns";

const startDate = new Date(2023, 4, 13);

const events = createEvents(
  new Array(100)
    .fill(0)
    .map<EventAttributes>((_, i) => {
      return {
        uid: `zen-${i}`,
        start: getIcsDateArray(addDays(startDate, i)),
        startInputType: "utc",
        startOutputType: "utc",
        duration: { minutes: 15 },
        status: "CONFIRMED",
        title: `ZEN: ${i + 1}`,
        calName: "ZEN",
      };
    })
    .filter((event): event is EventAttributes => !!event)
);

export const get: APIRoute = async () => {
  return new Response(events?.value, {
    headers: new Headers({
      "content-type": "text/calendar",
      "cache-control": "public, max-age=3600, must-revalidate",
    }),
  });
};
