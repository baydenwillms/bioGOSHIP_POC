export function stringToColor(str?: string) {
  if (!str) return '#333333';
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).slice(-2);
  }
  return color;
}

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

/**
 * Distinct colors for map tracks. A fixed qualitative palette (readable on
 * Esri ocean tiles) is assigned by stable id hash; extras use golden-angle hues.
 */
const TRACK_PALETTE = ['#282687', '#6b8f12', '#c45c26', '#0f766e', '#a21caf', '#b45309', '#1d4ed8', '#9f1239', '#365314', '#6d28d9'];

export function colorsForIds(ids: readonly string[]): string[] {
  const unique = [...new Set(ids)];
  const sorted = [...unique].sort();
  const colorById = new Map<string, string>();
  const used = new Set<number>();
  let extra = 0;

  for (const id of sorted) {
    if (used.size < TRACK_PALETTE.length) {
      let idx = hashString(id) % TRACK_PALETTE.length;
      while (used.has(idx)) idx = (idx + 1) % TRACK_PALETTE.length;
      used.add(idx);
      const color = TRACK_PALETTE.at(idx);
      colorById.set(id, color ?? TRACK_PALETTE[0]);
    } else {
      let hue = (hashString(id) + extra * 137.508) % 360;
      extra += 1;
      if (hue > 195 && hue < 235) hue = (hue + 55) % 360;
      colorById.set(id, `hsl(${Math.round(hue)} 58% 38%)`);
    }
  }

  return ids.map((id) => colorById.get(id) ?? TRACK_PALETTE[0]);
}

// format just the time part (HH:mm)
export const formatTime = (d: Date) => d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');

// format a date range, showing time unless the event is all-day
export const formatRange = (start: Date, end?: Date, allDay?: boolean, locale?: string, listYear?: string) => {
  const startFormat = new Intl.DateTimeFormat(locale ?? 'en', { year: listYear && start.getFullYear() === Number(listYear) ? undefined : 'numeric', month: 'long', day: 'numeric' });
  const startLabel = startFormat.format(start);
  const t = allDay ? '' : ', ' + formatTime(start);

  if (!end || start.getTime() === end.getTime()) return startLabel + t;

  const endFormat = new Intl.DateTimeFormat(locale ?? 'en', { year: listYear && end.getFullYear() === Number(listYear) ? undefined : 'numeric', month: 'long', day: 'numeric' });
  const endLabel = endFormat.format(end);

  // same calendar day → "August 13, 2026, 15:00 - 18:00"
  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && start.getDate() === end.getDate()) {
    return allDay ? startLabel : startLabel + t + ' - ' + formatTime(end);
  }

  // different days → "August 13, 2026, 15:00 - August 16, 2026, 18:00"
  return allDay ? startLabel + ' - ' + endLabel : startLabel + t + ' - ' + endLabel + ', ' + formatTime(end);
};
