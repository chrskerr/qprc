import { CollectionEntry, getCollection } from "astro:content";

type Run = CollectionEntry<"runs">;
type Runs = Run[];

function createSorter(sort: "asc" | "desc") {
  return function (a: Run, b: Run): number {
    if (sort === "asc") {
      return a.data.startTime.valueOf() - b.data.startTime.valueOf();
    } else {
      return b.data.startTime.valueOf() - a.data.startTime.valueOf();
    }
  };
}

export async function getSortedRuns(): Promise<{ upcoming: Runs; past: Runs }> {
  const now = Date.now();

  const allRuns = await getCollection("runs");

  const upcomingRuns: Runs = [];
  const pastRuns: Runs = [];

  for (const run of allRuns) {
    if (run.data.startTime.valueOf() > now) {
      upcomingRuns.push(run);
    } else {
      pastRuns.push(run);
    }
  }

  return {
    upcoming: upcomingRuns.sort(createSorter("asc")),
    past: pastRuns.sort(createSorter("desc")),
  };
}
