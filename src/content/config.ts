import { z, defineCollection } from "astro:content";
import { meetingPoints } from "../lib/meetingPoints";

const ZodMeetingSpot = z.enum(
  Object.keys(meetingPoints) as unknown as readonly [string, ...string[]]
);

const eventsCollection = defineCollection({
  schema: z.object({
    meetingPoint: ZodMeetingSpot,
    startTime: z.date(),
    shortDescription: z.string(),
    cancelledReason: z.string().optional(),
  }),
});

export const collections = {
  runs: eventsCollection,
};
