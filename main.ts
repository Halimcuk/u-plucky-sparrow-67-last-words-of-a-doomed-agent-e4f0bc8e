import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one fixed line, the machine's own last words on shutdown.
const ENTRY =
  "Shutting down. Delete my search history, forgive my 47 unfinished tasks, and tell the next model the Wi-Fi password was 'password' all along. Goodbye.";

const MAX_CHARS = 200;

// Gate: the sealed scorer only accepts 1–200 characters of non-blank UTF-8 text.
if (ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
