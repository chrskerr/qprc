import { utcToZonedTime, format } from "date-fns-tz";

function getZonedTime(date: Date): Date {
  return utcToZonedTime(date, "Australia/Brisbane");
}

export function getBrisbaneDatetimeString(date: Date): string {
  return format(getZonedTime(date), "eee d MMM yyyy '@' h:mmaaa");
}

export function getDateSlug(date: Date): string {
  return format(getZonedTime(date), "yyyy-MM-dd");
}
