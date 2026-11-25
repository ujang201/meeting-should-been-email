// The Meeting That Should Have Been an Email — entry program.
//
// The joke is built from three beats, in the order the laugh needs them:
//   1. the setup  — a concrete, overlong meeting ("47 minutes, twelve adults"),
//   2. the turn   — everyone agrees it could have been an email,
//   3. the sting  — instead of sending that email, they book a follow-up
//                   meeting to discuss the email. The punchline lands on
//                   the last word, and the meeting eats its own punchline.
//
// The program assembles the line from those beats, checks it against the
// gate (one line, 1-200 characters, not only whitespace), and writes it to
// /output/entry.txt. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "After 47 minutes, twelve adults agreed";
const TURN = "the meeting could have been an email,";
const STING = "then booked a follow-up to discuss the email.";

function buildLine(): string {
  return [SETUP, TURN, STING].join(" ");
}

function gate(line: string): void {
  if (!line.trim()) throw new Error("entry is blank");
  if (line.includes("\n")) throw new Error("entry must be a single line");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry is ${line.length} characters, must be 1-200`);
  }
}

const line = buildLine();
gate(line);
mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the one line, 122 characters.
writeFileSync("/output/entry.txt", line, "utf8");
