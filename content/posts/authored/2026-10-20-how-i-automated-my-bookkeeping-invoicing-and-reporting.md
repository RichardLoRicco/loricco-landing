---
title: "What I automated in my own bookkeeping, invoicing, and reporting"
slug: "how-i-automated-my-bookkeeping-invoicing-and-reporting"
description: "I run a one-person practice. Here's how the money side works now: what an agent prepares each month, what I still do myself, what's next, and why nothing gets filed or sent without me."
metaTitle: "How I Automated My Bookkeeping, Invoicing, and Reporting"
metaDescription: "How a one-person practice handles invoicing, sales tax, and bookkeeping with agents that prepare the work and a person who signs off on all of it."
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
    answer: "QuickBooks Online on the entry plan, Mercury as the bank (no base fee for how I use it), Todoist, and the Claude subscription I already pay for because of client work. I don't have a bookkeeper yet. I plan to have one review the chart of accounts once there are a few more months of real transactions."
  - question: "Could a small law firm or a local business do this?"
    answer: "Probably, but the software is the smaller part of it. Most of the work in my setup was writing down, in plain words, what I actually do each month and what the rules are. Once that existed, giving it to an agent was straightforward."
  - question: "Why don't you let the agents write to QuickBooks?"
    answer: "Because I'm a developer, and a system that touches money should have a safeguard that doesn't depend on the agent getting it right. Read-only is a cheap one. The agent can be wrong on a worksheet and I'll catch it. It can't be wrong in the books."
---

On the 12th of every month, at eight in the morning, a worksheet shows up as a comment on a Todoist task called "File and Pay Sales Use Tax." It has last month's Connecticut return worked out line by line, every client payment matched to a bank deposit, and a status at the top: READY, NEEDS REVIEW, or INCOMPLETE. I read it with coffee. If it says READY, I log in to the state portal, enter the numbers, and pay.

In its first month it did the legwork: the matching, the math, and the list of things to check. That's the part I never want to do by hand again.

Most of the money side of this business works that way now, or is heading there. I run a one-person practice, building websites, AI systems, and software for small firms and local businesses, and I publish a few apps on the side. Clients pay me to automate the tedious parts of their operations, so it would be a little embarrassing if my own books were a pile of receipts in a drawer. At some point I pointed the same tools at my own bookkeeping, invoicing, and reporting. This is what that looks like today, what I still do myself, and what's next.

## The one rule

Nothing I've automated moves money, files a return, sends an invoice, or changes the books. The routines read, compute, and draft, and then they hand me something to approve.

I'm a developer, and this is the kind of safeguard I'd put in any system that touches money. An agent that only reads can be wrong on a worksheet, and I'll catch it when I review. An agent that can write can be wrong in the books, and I might not. So the sales-tax routine isn't allowed to click Save inside QuickBooks. When it opens a payment to read the date and the amount, it leaves through Cancel. Its permissions are a few read-only tools, the ability to post a Todoist comment, and the ability to create a Gmail draft. If it needs anything else, it stalls and waits for me.

## The setup underneath

There's nothing clever here. Mercury is the bank. Every business dollar goes in and out of the LLC's account there, receipts get attached to the transaction in the Mercury app, and anything the vendor name doesn't explain gets a one-line note. QuickBooks Online is the books of record for invoices, sales tax, receivables, and the profit and loss, and it pulls the Mercury transactions in through its bank feed. I'm on the entry-level plan.

The next step on this layer is the one I'm looking forward to: a routine that goes through every Mercury transaction, matches it to QuickBooks, proposes the category and the receipt, and hands me the batch to approve. Same rule as everything else. It proposes, I accept.

The source of truth is never a spreadsheet. A spreadsheet is fine for a month of cleanup. It's a bad place to discover in April that something got counted twice.

Every routine I've built runs on Claude Code, as a scheduled task in the desktop app. It reaches the bank and the books through my own signed-in browser, using the Claude in Chrome extension, and through QuickBooks' API connector, and it talks to me through Todoist and Gmail. There's no custom code in any of it. Each routine is a Markdown file in a private repo that says what to read, what to compute, what to flag, and what it isn't allowed to touch. The same repo holds the rest of the rules: the chart of accounts, what to record for a client lunch versus a laptop, how an owner draw gets labeled so it never looks like an expense. Anything recurring gets written down the same way, with the date it happens and the steps. If I want to change what happens on the 12th, I edit the file. The scheduled task just points at it.

I've looked at the other options for this, Muse and OpenAI's agent tools among them, and I keep coming back to Claude. For this kind of work, reading a bank feed and a set of invoices and reconciling them without inventing anything, Anthropic's Opus 5.5 and Fable models are the ones I trust right now. That could change. Until an agent like Muse or Grokbot ships a model I enjoy working with as much and trust as much, I'm staying with Anthropic.

## The 25th: invoices

Retainer invoices are created by QuickBooks recurring templates on the 25th. QuickBooks stages everything: the invoice, the lines, the tax, the due date. A Todoist task reminds me the same morning. I open each one, check it against what the engagement actually says, and approve it, and then the invoice and the email go out. It's a few minutes a month, and it's a few minutes I want to keep, because a wrong invoice going to a client costs more than any amount of automation saves.

The part that matters isn't the template. It's that the template, the reminder, and the check I do are all written down, so the 25th works the same way every month whether or not I remember it.

## The 12th: sales tax

This is the routine I was most nervous about building, and the one that's turned out to be the most useful.

Connecticut taxes different kinds of work at different rates, so what I owe each month depends on which payments actually arrived and how each one splits. That's a reconciliation problem, and reconciliation is the kind of work that gets pushed to the end of the month and then to the end of the next one.

The routine is a Claude Code scheduled task, and it runs read-only. It pulls every payment, opens each one just long enough to read the date and the amount applied, then goes to Mercury and lists every deposit. It matches payments to deposits in both directions, one to one. A deposit with no QuickBooks payment behind it is the first thing it flags, because that's the case where the return would come out wrong. Then it builds the worksheet, rounds the way the form rounds, and compares its own figure to what QuickBooks says was collected. If there's a difference it can't explain, even a small one, the status is NEEDS REVIEW instead of READY, and it shows me both numbers rather than choosing one.

It also checks that last month's payment to the state actually went through, that the bank feed isn't stale, and whether any new vendor showed up that I need to make a decision on. It doesn't make that decision. It lists the vendor and leaves it to me.

## What I still do by hand

More than the opening paragraph suggests, and on purpose. I approve and send every invoice. I file and pay every return. When the worksheet flags something, I'm the one who looks at it and decides. I sign in to the bank, the books, and the state portal myself, because the routines never get credentials.

And then there's the monthly close: going through every transaction, attaching what's missing, reconciling the account, reading the P&L. I don't have a routine for that yet. Right now it happens in pieces, mostly when the sales-tax worksheet flags a stale feed or an unrecorded charge, which is a reminder, not a system. I'm not proud of that part. It's also the next thing on the list.

## What's next

Three routines are written down and not running yet.

The monthly close, as a prepared batch: a Claude Code task walks the month's Mercury transactions, proposes matches and categories, lists what's missing a receipt, and hands me one approval pass. A Monday-morning check that reads the books and the inbox and tells me what's past due, what's gone quiet, and what's due in the next two weeks. And a monthly report for each retainer client, drafted from what actually shipped and what the numbers did, that I review and send with the invoice. The specs exist. The runs don't, yet. I'll write about each one once it has actually run for a month, because a spec and a working routine are not the same thing, and I'd rather this blog describe the second.

If you run a small firm or a local business and the money side is still a shoebox you deal with in April, I wouldn't start with AI. I'd start by writing down what you actually do each month. Once that's on paper, the automation is the easy part.
