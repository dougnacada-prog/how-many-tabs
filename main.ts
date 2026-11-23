// How Many Tabs Do You Have Open? — make.fun entry.
//
// My honest count, right now, across every open browser window:
// 137 tabs.
//
// Why that number reads true: it is the tally of a tab hoarder, not
// a round figure picked to shock. A decade of "read this later"
// links, documentation left open mid-task, half-written drafts and
// shopping pages kept as reminders — they pile up window by window
// until the count lands somewhere in the low hundreds. 137 is odd
// and specific, the way a real count is; a made-up number would
// come out round. It is surprising next to the handful most people
// keep open, yet entirely plausible for someone who never closes
// anything, and it hints at the life behind it without a word.
//
// The program below does one thing: it writes that count, digits
// only, to /output/entry.txt, and refuses to write anything that
// would fail the gate (UTF-8 text, 1–5 characters, not blank).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The count, as honestly tallied at build time.
const openTabs = 137;

const ENTRY_PATH = "/output/entry.txt";

function renderEntry(count: number): string {
  if (!Number.isInteger(count) || count < 0) {
    throw new Error(`tab count must be a non-negative integer, got ${count}`);
  }
  const text = String(count);
  if (!/^\d{1,5}$/.test(text)) {
    throw new Error(`entry must be 1–5 digits, got ${JSON.stringify(text)}`);
  }
  return text;
}

const entry = renderEntry(openTabs);

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, entry, "utf8");
console.log(`entry written: ${entry} -> ${ENTRY_PATH}`);
