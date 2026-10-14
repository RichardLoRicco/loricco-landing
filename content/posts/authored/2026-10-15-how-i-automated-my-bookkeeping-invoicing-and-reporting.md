---
title: "What I automated in my own bookkeeping, invoicing, and reporting (and what I still do by hand)"
slug: "how-i-automated-my-bookkeeping-invoicing-and-reporting"
description: "A one-person practice, five money routines, one rule: the agents prepare, I decide. Here's the setup, what it catches, and the part I kept for myself on purpose."
metaTitle: "How I Automated My Bookkeeping, Invoicing, and Reporting"
metaDescription: "A one-person practice runs five money routines on agents that prepare and never decide. The setup, what it catches each month, and what I still do by hand."
publishedAt: "2026-10-15"
series: "Running the practice on agents"
tags:
  - "Practice"
  - "Agents"
  - "Bookkeeping"
faqs:
  - question: "Does an AI file your taxes?"
    answer: "No. The routine prepares a worksheet and I file and pay in the state portal myself. Its permissions don't include any tool that can file a return, move money, or change the books, so it can't do those things even by accident."
  - question: "What does this setup cost?"
    answer: "QuickBooks Online on the entry plan, Mercury as the bank (no base fee for how I use it), Todoist, and the Claude subscription I already use for client work. No bookkeeper yet. I'll bring one in to review the chart of accounts once there are a few more months of real transactions to look at."
  - question: "Could a small law firm or a local business run its books this way?"
    answer: "The tooling part, yes. The hard part isn't the software. It's writing down what you actually do each month, in plain words, so an agent can follow it and you can check it. Most of the work in my setup is the writing-down. The automation came after."
  - question: "Why is everything read-only?"
    answer: "Because the one time an agent wrote to my invoices, it saved a wrong tax override that the screen didn't show. I caught it by re-reading the totals. A routine that only reads can be wrong, but it can't be wrong in the books, and I'd rather fix a worksheet than refund a client."
---

On the 12th of every month, at eight in the morning, a worksheet shows up as a comment on a Todoist task called "File and Pay Sales Use Tax." It has last month's Connecticut return worked out line by line, every client payment matched to a bank deposit, and a status at the top: READY, NEEDS REVIEW, or INCOMPLETE. I read it with coffee. If it says READY, I log in to the state portal, type in three numbers, and pay. Ten minutes, maybe fifteen.

I didn't do any of the math. An agent did, from a spec I wrote.

That's the shape of almost everything on the money side of this business now. I run a one-person practice: websites, AI systems, and software for small firms and local businesses, plus a handful of apps. Clients pay me to automate the boring parts of their operations. It would be strange if my own books were a pile of receipts in a drawer. So I pointed the same tools at my own bookkeeping, invoicing, and reporting. Here's what that looks like, what it catches, and the parts I deliberately kept for myself.

## The rule that makes it safe

One rule first, because everything else depends on it. **The agents prepare. I decide.**

No routine of mine moves money, files a return, sends an invoice, or changes the books. They read, they compute, they draft, and they hand me something to approve. On the sales-tax run, the agent isn't even allowed to click Save inside QuickBooks. It opens a payment to read it and leaves through Cancel. The whole permission list is a few read-only tools, a Todoist comment, and a Gmail draft. Anything else and it stalls. I'd rather have a stall than a surprise.

That sounds paranoid until you've seen what a small mistake costs. A few weeks ago an agent edited two invoices through the QuickBooks API to tidy up the payment options. Harmless change. Except the edit quietly saved a manual 7.35% tax override on every line while the dropdown still said "Automatic calculation." I caught it because I re-read the totals. The fix took thirty seconds in the QuickBooks interface. Not catching it would have meant collecting the wrong tax from two clients and then filing it. So now the money routines never write. Not to QuickBooks, not to Mercury, not to the state.

## Three layers, no spreadsheet

The setup underneath is boring on purpose.

- **Mercury** is the bank. Every business dollar moves through the LLC's account there. Card purchases over $75 need a receipt attached before they clear review, and I add a one-line note whenever the business purpose isn't obvious from the vendor name.
- **QuickBooks Online** is the books of record: invoices, sales tax, receivables, reconciliations, the profit and loss. It's the entry-level plan, and every CPA I've met knows it.
- **A secure folder outside of everything** holds statements, receipts, filed returns, and year-end reports, named by date, for the day the tools change.

The source of truth is never a spreadsheet. A spreadsheet is fine for a month of cleanup. It is a terrible place to find out, in April, that something was counted twice.

Every rule above lives in a Markdown file in a private repo: the chart of accounts, what to capture for a client lunch versus a laptop, how an owner draw gets labeled so it never looks like an expense. The agents read those files. So do I, when I forget. If I want to change what happens on the 12th, I edit a text file. The scheduled task just points at it.

## Monday: the pulse

Every Monday morning a routine reads QuickBooks, my inbox, and the client repos, and writes me a short briefing. One line at the top says green, yellow, or red and why. Then: any invoice past due or due within a week, whether I shipped what each retainer promises, deadlines in the next 14 days, and anything odd, like a charge in Mercury I don't recognize. Each action item becomes a Todoist task, due today.

Nothing in it is hard. The point is that nothing goes stale quietly. A client email that's sat for three days gets named. So does a post stuck in review for a week. I read it in five minutes and the week has a shape.

## The 25th: invoices I still send by hand

Retainer invoices are created by QuickBooks recurring templates on the 25th, Net 15, so they come due around the 10th. One client is billed a month ahead and one a month behind, which sounds fussy and is exactly the kind of thing you get wrong once before you write it down. The templates create the invoice. They don't send it. A Todoist task reminds me, I open each one, check the lines, the tax, and the month it covers, and hit send myself.

While QuickBooks could email those for me, I'd rather be the one who hits send. Two clients, two invoices, two minutes. A wrong invoice costs more goodwill than I'd save in a year of not clicking.

## The 12th: sales tax, to the cent

This is the one I'm proudest of, and the one I was most nervous about.

Connecticut taxes my website work at 1% and my content work at 6.35%, and the legal consulting not at all. I report on a cash basis. So the question every month is simple to state and annoying to answer: which payments actually arrived last month, and how do they split? That's a reconciliation problem, and reconciliation is the thing everyone puts off.

The routine runs read-only, in my own browser session plus the QuickBooks API. It pulls every payment, opens each one just to read the date and the amount applied, then goes to Mercury and lists every deposit. It matches them both ways, one to one. A deposit with no QuickBooks payment behind it is the top flag, because that's the one that makes the return understate tax. Then it builds the three lines on the state form, rounds them the way the form rounds, and reconciles its own unrounded tax to what QuickBooks says was collected. Every cent of difference needs a named cause. If there's a cent it can't explain, the status is NEEDS REVIEW, not READY, and it shows me both numbers instead of picking one.

It also checks that last month's payment to the state actually posted, that the bank feed isn't stale, and whether a new software vendor showed up that needs a use-tax call. It never guesses that call. New vendor, my decision, flagged.

What I do: read the worksheet, confirm that a check which straddled month-end arrived when the books say it did, file, pay, check the box. The first month I watched the whole run. Now I read the flags.

On the cash-basis question itself: I read the statute, had two different models read it independently, and checked the current text on Lexis+ before I relied on it. That's the attorney half of me earning its keep. It's also a decision I made for my own business, with my own facts, and yours may come out differently. Ask your CPA.

## The 1st: the report nobody asked for

Every retainer client gets a monthly report: what shipped, what the search numbers did, what the AI-search monitoring found, how many leads the contact form caught. A routine drafts it from the git log, the blog registry, the monitoring log, and the form-relay emails. I spend about fifteen minutes on it. Then it goes out with the invoice.

Nobody asked me for this report. It's the part of the retainer that's visible, which is why it's the part that keeps the retainer. If a number can't be verified that month, it's left out. Estimates don't go to clients.

## What I still do by hand

The monthly close. Downloading the statement, going through "Needs review" in Mercury, attaching the receipts I forgot, syncing to QuickBooks, reconciling, reading the P&L, saving the reports to the archive, and writing the two or three questions for my CPA. There's a checklist. I follow it. It takes an evening.

I haven't automated it, and I'm not sure I will. Reconciling your own bank account is one of the few places where doing the thing by hand teaches you something about the business every single month: which subscription crept, which client pays on the 3rd without fail, what you spent on tools versus what they gave back. The agents can prep the list. I want my hands on the ledger once a month.

## What it adds up to

Five routines: the pulse, the invoices, the sales tax, the report, the close. Three prepared by an agent, one by QuickBooks on a schedule, one by me with a checklist. All five decided by me. The tooling is a bank, QuickBooks, a task manager, and a folder of Markdown files that say exactly what's allowed. A lawyer would call that a policy. I call it the only way I'd let software near my money.

If you run a small firm or a local business and your version of this is a shoebox and a prayer in April, the first fix isn't AI. It's writing down what you do. Once it's written down, the automation is the easy part.
