import { utcToZonedTime, format } from "date-fns-tz";
import { format as formatUtc } from "date-fns";

const tz = "Australia/Brisbane";

function getZonedTime(date: Date): Date {
  return utcToZonedTime(date, tz);
}

export function getBrisbaneDatetimeString(date: Date): string {
  return format(getZonedTime(date), "eee d MMM yyyy '@' h:mmaaa");
}

export function getIcsDateArray(
  date: Date
): [number, number, number, number, number] {
  return formatUtc(date, "yyyy MM d k m").split(" ").map(Number) as [
    number,
    number,
    number,
    number,
    number
  ];
}

export function getDateSlug(date: Date): string {
  return format(getZonedTime(date), "yyyy-MM-dd");
}
