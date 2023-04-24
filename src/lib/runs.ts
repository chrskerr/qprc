import { CollectionEntry, getCollection } from "astro:content";

export async function getUpcomingRuns(
  sort: "asc" | "desc" = "asc"
): Promise<CollectionEntry<"runs">[]> {
  const now = Date.now();

  const allRuns = await getCollection("runs");
  const filteredRuns = allRuns.filter((run) => {
    return run.data.startTime.valueOf() > now;
  });

  return filteredRuns.sort((a, b) => {
    if (sort === "asc") {
      return a.data.startTime.valueOf() - b.data.startTime.valueOf();
    } else {
      return b.data.startTime.valueOf() - a.data.startTime.valueOf();
    }
  });
}
