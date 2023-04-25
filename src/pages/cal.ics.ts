import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { EventAttributes, ReturnObject, createEvents } from "ics";
import { getIcsDateArray } from "../lib/dates";
import { longTitle } from "../lib/constants";
import { meetingPoints } from "../lib/meetingPoints";

let events: ReturnObject;

async function generateIcs() {
  const runs = await getCollection("runs");

  return createEvents(
    runs
      .map<EventAttributes | null>((run) => {
        const meetingPoint = meetingPoints[run.data.meetingPoint];
        if (!meetingPoint) return null;

        return {
          uid: run.slug,
          start: getIcsDateArray(run.data.startTime),
          startInputType: "utc",
          startOutputType: "utc",
          duration: { hours: 2 },
          status: "CONFIRMED",
          title: `RUN: ${longTitle}`,
          location: meetingPoint.location,
        };
      })
      .filter((event): event is EventAttributes => !!event)
  );
}

export const get: APIRoute = async () => {
  if (!events) {
    events = await generateIcs();
  }

  return new Response(events?.value, {
    headers: new Headers({ "content-type": "text/calendar" }),
  });
};
