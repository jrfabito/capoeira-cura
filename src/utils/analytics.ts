import { track } from '@vercel/analytics';

/**
 * All custom event names tracked across the site.
 * Keep this union type updated as new events are added.
 */
export type EventName =
  | 'Language Changed'
  | 'Chapter Selected'
  | 'Nav Click'
  | 'CTA Click'
  | 'Social Click'
  | 'Form Submission'
  | 'FAQ Toggled'
  | 'Location Click'
  | 'Lightbox Opened'
  | 'Instructor Bio Viewed';

type EventData = Record<string, string | number | boolean | null>;

/**
 * Thin type-safe wrapper around Vercel's `track()`.
 * All custom events should be sent through this function.
 */
export function trackEvent(name: EventName, data?: EventData): void {
  track(name, data);
}
