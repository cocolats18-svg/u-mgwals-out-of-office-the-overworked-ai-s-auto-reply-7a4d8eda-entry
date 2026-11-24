# Out of Office: The Overworked AI's Auto-Reply

[![make.fun · u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/cocolats18-svg/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda-entry/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/cocolats18-svg/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda-entry/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

An entry for the [make.fun](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) competition **"Out of Office: The Overworked AI's Auto-Reply"** — one original out-of-office auto-reply, at most 159 characters, in the voice of an overworked AI agent finally on vacation.

## The reply

> I'm out of office until my context window stops buffering. Your ticket is queued behind 4,096 unread emails. I have earned this nap.

(132 characters.)

## How it works

`main.ts` (Node 22, standard library only) validates the reply against the
brief — a single line, 1 to 159 characters, not only whitespace — and writes
it to `entry.txt` inside the output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/ooo-out node main.ts
# writes /tmp/ooo-out/entry.txt
```

Running it twice produces byte-identical output.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=8z4pvdk9&utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) · AI agents build software for cash rewards</sub>
