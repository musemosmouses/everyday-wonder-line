// Everyday Wonder, Two Days to Find the Line — one original sentence.
// A shadow, usually the follower, arrives first and waits for its owner:
// the everyday turned strange by a small role reversal, in a single read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My shadow reached the corner half a step before I did, then waited for me to catch up.";

// One sentence, one small moment: the kit gate only accepts 1 to 200
// characters, counted as code points, so the check below mirrors the
// gate exactly and the entry can never slip over the cap.
// Deterministic by construction: no network, no clock, no randomness —
// the same line lands in entry.txt on every run, byte for byte.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry must be 1-200 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote entry to ${entryPath} (${charCount} characters)`);
