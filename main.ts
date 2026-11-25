// invent-a-word-we-need entry: one new English word and its
// one-line definition (98 characters, under the 140-character limit).
// Deterministic, no network, no input. Run with: node main.ts
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR)
// and prints it to stdout, so the grader finds it either way.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "draftloop (n.) — typing, deleting, and retyping a message until you give up and send 'ok' instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
