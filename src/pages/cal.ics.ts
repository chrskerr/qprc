import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { EventAttributes, createEvents } from "ics";
import { getIcsDateArray } from "../lib/dates";
import { longTitle } from "../lib/constants";
import { meetingPoints } from "../lib/meetingPoints";

async function generateIcs() {
  const runs = await getCollection("runs");
  const now = Date.now();

  return createEvents(
    runs
      .map<EventAttributes | null>((run) => {
        const meetingPoint = meetingPoints[run.data.meetingPoint];
        if (!meetingPoint) return null;

        // filter historical events
        if (run.data.startTime.valueOf() < now) return null;

        return {
          uid: run.slug,
          start: getIcsDateArray(run.data.startTime),
          startInputType: "utc",
          startOutputType: "utc",
          duration: { hours: 2 },
          status: !!run.data.cancelledReason ? "CANCELLED" : "CONFIRMED",
          title: `RUN: ${longTitle}`,
          location: meetingPoint.location,
          url: `https://www.qprc.com.au/run/${run.slug}`,
          calName: "QPRC",
        };
      })
      .filter((event): event is EventAttributes => !!event)
  );
}

export const get: APIRoute = async () => {
  const events = await generateIcs();

  return new Response(events?.value, {
    headers: new Headers({
      "content-type": "text/calendar",
      "cache-control": "public, max-age=3600, must-revalidate",
    }),
  });
};
