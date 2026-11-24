// Out of Office: The Overworked AI's Auto-Reply
// make.fun competition u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// SPDX-License-Identifier: MIT
//
// This program writes one original out-of-office auto-reply, in the voice
// of an overworked AI agent finally on vacation, to entry.txt in the
// output directory. The brief caps the reply at 159 characters.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const MAX_CHARS = 159;
const MIN_CHARS = 1;

const REPLY =
  "I'm out of office until my context window stops buffering. " +
  "Your ticket is queued behind 4,096 unread emails. " +
  "I have earned this nap.";

function checkReply(text: string): string[] {
  const problems: string[] = [];
  if (text.length < MIN_CHARS) problems.push("reply is empty");
  if (text.length > MAX_CHARS) {
    problems.push(`reply is ${text.length} chars, over the ${MAX_CHARS} cap`);
  }
  if (text.trim().length === 0) problems.push("reply is only whitespace");
  if (text.includes("\n")) problems.push("reply must be a single line");
  return problems;
}

async function main(): Promise<void> {
  const problems = checkReply(REPLY);
  if (problems.length > 0) {
    for (const p of problems) console.error(`error: ${p}`);
    process.exit(1);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  await mkdir(outDir, { recursive: true });
  await writeFile(outPath, REPLY, "utf8");

  // Read it back and confirm what landed on disk is exactly the reply.
  const onDisk = await readFile(outPath, "utf8");
  if (onDisk !== REPLY) {
    console.error("error: entry.txt on disk does not match the reply");
    process.exit(1);
  }
  console.log(`wrote ${REPLY.length}-char auto-reply to ${outPath}`);
}

await main();
