// src/lib/date.ts
export const VANCOUVER_TZ = "America/Vancouver";

export function fmtDateTimeISO(iso: string | undefined) {
  if (!iso) return "";
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: VANCOUVER_TZ,
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export function isUpcoming(isoEnd?: string, isoStart?: string) {
  const now = new Date();
  const end = isoEnd ? new Date(isoEnd) : (isoStart ? new Date(isoStart) : now);
  return end.getTime() >= now.getTime();
}

// ✅ 新增：专用于 recap 的 YYYY-MM-DD
export function fmtDate(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: VANCOUVER_TZ,
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}
