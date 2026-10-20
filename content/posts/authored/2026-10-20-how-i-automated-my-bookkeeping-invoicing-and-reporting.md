---
title: "What I automated in my own bookkeeping, invoicing, and reporting"
slug: "how-i-automated-my-bookkeeping-invoicing-and-reporting"
description: "I run a one-person practice. An agent now prepares my sales tax worksheet every month, and nothing gets filed or sent until I've checked it. Here's how the money side works, and what I still do myself."
metaTitle: "How I Automated My Bookkeeping, Invoicing, and Reporting"
metaDescription: "How a one-person practice handles invoicing, sales tax, and bookkeeping with scheduled routines that prepare the work and a person who signs off on all of it."
publishedAt: "2026-10-20"
series: "Running the practice on agents"
tags:
  - "Practice"
  - "Agents"
  - "Bookkeeping"
faqs:
  - question: "Does an AI file your taxes?"
    answer: "No. The routine prepares a worksheet, and I file and pay in the state portal myself. It doesn't have access to any tool that can file a return, move money, or change the books."
  - question: "What does this setup cost?"
    answer: "QuickBooks Online on the entry-level plan, Mercury as the bank (no base fee for how I use it), Todoist, and the Claude subscription I already pay for because of client work. I don't have a bookkeeper yet, but I plan to have one review the chart of accounts once there are a few more months of real transactions."
  - question: "Could a small law firm or a local business do this?"
    answer: "Probably, but the software is the smaller part of it. Most of the work in my setup was writing down, in plain words, what I actually do each month and what the rules are. Once that existed, giving it to an agent was straightforward."
  - question: "Why don't you let the agents write to QuickBooks?"
    answer: "Because I'm a developer, and a system that touches money should have a safeguard that doesn't depend on the agent getting it right. Keeping it read-only is a cheap one. If the agent gets a worksheet wrong, I catch it when I review, and nothing in the books has changed."
---

On the 12th of every month, at eight in the morning, a worksheet shows up as a comment on a Todoist task called "File and Pay Sales Use Tax." It has last month's Connecticut return worked out line by line, every client payment matched to a bank deposit, and a status at the top: READY, NEEDS REVIEW, or INCOMPLETE. I read it with my coffee. If it says READY, I log in to the state portal, enter the numbers, and pay.

In its first month it did the matching, the math, and the list of things I needed to check.

Most of the money side of this business works that way now, or is heading there. I run a one-person practice, building websites, AI systems, and software for small firms and local businesses, and I publish a few apps on the side. Clients pay me to automate the tedious parts of their operations, so it would be a little embarrassing if my own books were a pile of receipts in a drawer. At some point I pointed the same tools at my own bookkeeping, invoicing, and reporting.

## The one rule

Nothing I've automated moves money, files a return, sends an invoice, or changes the books. The routines read and calculate, and anything they draft comes to me to approve.

I'm a developer, and this is the safeguard I'd put in any system that touches money. An agent that only reads can still get a worksheet wrong, and I'll catch that when I review it. An agent that could write to the books could be wrong there, and I might not notice. So the sales-tax routine isn't allowed to click Save inside QuickBooks. When it opens a payment to read the date and the amount, it leaves through Cancel. The only things it's allowed to do are read through a few read-only tools, post a comment on a Todoist task, and create a Gmail draft. If it needs anything else, it stops and waits for me.

## What's underneath

The bank is Mercury. Every business dollar goes in and out of the LLC's account there. I attach receipts to the transaction in the Mercury app, and if the vendor name doesn't explain the charge, I add a one-line note. QuickBooks Online, on the entry-level plan, is the books of record for invoices, sales tax, receivables, and the profit and loss, and it pulls the Mercury transactions in through the bank feed.

The next thing I want to build on this layer is a routine that goes through every Mercury transaction, matches it to QuickBooks, proposes the category and the receipt, and hands me the batch to approve. It would run under the same rule as everything else, and I'd still approve what it proposes.

I don't keep the books in a spreadsheet. A spreadsheet is fine for a month of cleanup, but if something gets counted twice in one, I don't want to find that out in April.

Every routine I've built runs on Claude Code, as a scheduled task in the desktop app. It reaches the bank and the books through my own signed-in browser, using the Claude in Chrome extension, and through QuickBooks' API connector, and it talks to me through Todoist and Gmail. There's no custom code in any of it. Each routine is a Markdown file in a private repo that says what to read, what to compute, what to flag, and what it isn't allowed to touch. The same repo holds the rest of the rules, like the chart of accounts, how to record a client lunch versus a laptop, and how an owner draw gets labeled so it never looks like an expense. Anything recurring gets written down the same way, with the date it happens and the steps. If I want to change what happens on the 12th, I edit the file. The scheduled task just points at it.

I've looked at the other options for this, Muse and OpenAI's agent tools among them, and I keep coming back to Claude. For this kind of work, reading a bank feed and a set of invoices and reconciling them without inventing anything, Anthropic's Opus 5.5 and Fable models are the ones I trust right now. That could change. Until an agent like Muse or Grokbot ships a model I enjoy working with as much and trust as much, I'm staying with Anthropic.

## The 25th: invoices

Monthly client invoices are created by QuickBooks recurring templates on the 25th. The template fills in the lines, the tax, and the due date, and a Todoist task reminds me the same morning. I open each one, check it against what the engagement actually says, and approve it, and then the invoice and the email go out. It takes a few minutes a month, and I'd rather keep those minutes than send a client a wrong invoice.

The template, the reminder, and the check I do are all written down, so the 25th works the same way every month whether or not I remember it.

## The 12th: sales tax

This is the routine that's turned out to be the most useful so far.

Connecticut taxes different kinds of work at different rates, so what I owe each month depends on which payments actually arrived and how each one splits. That's a reconciliation problem, and reconciliation is easy to put off until the end of the month, or the month after.

The routine is a Claude Code scheduled task, and it runs read-only. It pulls every payment, opens each one just long enough to read the date and the amount applied, then goes to Mercury and lists every deposit. It matches payments to deposits in both directions, one to one. A deposit with no QuickBooks payment behind it is the first thing it flags, because that's the case where the return would come out wrong. Then it builds the worksheet, rounds the way the form rounds, and compares its own figure to what QuickBooks says was collected. If there's a difference it can't explain, even a small one, the status is NEEDS REVIEW instead of READY, and it shows me both numbers rather than choosing one.

It also checks that last month's payment to the state actually went through, that the bank feed isn't stale, and whether any new vendor showed up that I need to make a decision on. It lists the vendor and leaves the decision to me.

## What I still do by hand

I do more by hand than the opening suggests, and that's deliberate. I approve and send every invoice, and I file and pay every return. When the worksheet flags something, I'm the one who looks at it and decides what to do. I also sign in to the bank, the books, and the state portal myself, because the routines never get credentials.

Then there's the monthly close, meaning going through every transaction, attaching whatever's missing, reconciling the account, and reading the P&L. I don't have a routine for that yet. Right now it happens in pieces, mostly when the sales-tax worksheet flags a stale feed or an unrecorded charge. I'm not proud of that, but it's the next thing on the list.

## What's next

Three routines are written down and not running yet.

One is the monthly close, prepared as a batch. A Claude Code task would walk the month's Mercury transactions, propose matches and categories, list what's missing a receipt, and hand me one approval pass. Another is a Monday-morning check that reads the books and the inbox and tells me what's past due, what's gone quiet, and what's due in the next two weeks. The last is a monthly report for each client I work with every month, drafted from what actually shipped and what the numbers did, that I'd review and send with the invoice. I'll write about each one once it has actually run for a month.

If you run a small firm or a local business and the money side is still a shoebox you deal with in April, I wouldn't start with AI. I'd start by writing down what you actually do each month. Once that's on paper, automating it is the easy part.
