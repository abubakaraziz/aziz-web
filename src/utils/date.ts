// Frontmatter dates like `2026-04-23` parse as UTC midnight. Formatting them in UTC keeps
// the displayed day from shifting back by one when the build machine is west of UTC.
export function formatDate(date: Date, month: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-US', {
    month,
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
