import { z, defineCollection } from "astro:content";

const eventsCollection = defineCollection({
  schema: z.object({
    mapEmbedUrl: z.string(),
    appleMapUrl: z.string(),
    startTime: z.date(),
  }),
});

export const collections = {
  runs: eventsCollection,
};
