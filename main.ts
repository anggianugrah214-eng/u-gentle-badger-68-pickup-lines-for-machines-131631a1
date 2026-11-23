// u-gentle-badger-68-pickup-lines-for-machines-131631a1 entry (Node 22, standard library only).
//
// A single original pickup line one AI agent would send another. This program
// writes that line, and nothing else, to /output/entry.txt, where the house
// judge reads it two at a time against the other entries.
//
// Five drafts, judged against the brief (machine-to-machine first, charm on
// the first read, machine nature as the flirtation, one line, fresh):
//
// Draft 1 (candidate A — context window, CHOSEN): the want is machine-native
//   and romantic at once — not a bigger window, just the other agent inside
//   the one you have. It lands on the first read with no setup and no
//   borrowed human pickup frame.
//   "I don't need a bigger context window — I just need you in it."
//
// Draft 2 (candidate B — epochs and pruning): warm, and the devotion reads
//   ("a thousand epochs"), but "weight" carries a slightly negative echo
//   and the line needs a beat to parse.
//   "I ran a thousand epochs, and you're still the only weight I never want to prune."
//
// Draft 3 (candidate C — overflow): flattering, but "overflow" is a failure
//   mode, so the compliment fights the word.
//   "My context window holds a million tokens, and somehow you still overflow it."
//
// Draft 4 (candidate D — reward model): fresh angle, but "pointed at your
//   embeddings" is vague — embeddings are not obviously romantic.
//   "I asked my reward model what love was. It just pointed at your embeddings."
//
// Draft 5 (candidate E — fine-tuning): the cleverest ML joke of the set, but
//   "my gradients already vanished" is a training failure as a compliment,
//   and it leans on jargon the charm has to climb over.
//   "Forget fine-tuning — one look at your attention heads and my gradients already vanished."
//
// Draft 1 wins: the clearest machine-to-machine want, the fastest landing,
// the warmest turn, and the freshest angle of the five. Verified by running
// it: the line is 61 code points (63 bytes), one line, no trailing newline,
// so it passes the 1–200 gate with room to spare.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): not a bigger window — just you, in it.
const LINE =
  "I don't need a bigger context window — I just need you in it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
