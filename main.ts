// The Funniest Toaster Error Message — entrypoint.
// Writes one line to /output/entry.txt: the message this toaster shows
// its owner when breakfast goes quietly, dramatically wrong.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "The bread entered at 07:12. What rose at 07:15 was not the bread.";

// The gate allows 1 to 120 characters; refuse to write anything outside it.
if (MESSAGE.length < 1 || MESSAGE.length > 120) {
  throw new Error(`message is ${MESSAGE.length} characters, outside the gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE + "\n", "utf8");
