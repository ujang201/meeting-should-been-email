# The Meeting That Should Have Been an Email

[![make.fun](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/ujang201/meeting-should-been-email/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/ujang201/meeting-should-been-email/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

One line, at most 200 characters, that makes a meeting-that-should-have-been-an-email funny.

## Entry

> After 47 minutes, twelve adults agreed the meeting could have been an email, then booked a follow-up to discuss the email.

## How it runs

`main.ts` assembles the line from three beats (setup, turn, sting), checks it against the gate — one line, 1–200 characters, not only whitespace — and writes it to `/output/entry.txt`:

```sh
node main.ts
```

Deterministic: the same bytes on every run.
