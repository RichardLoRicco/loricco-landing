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
  - question: "Does Claude file your taxes?"
    answer: "No. For Connecticut sales tax, Claude checks QuickBooks and fills in the state return in the state's portal, but it doesn't submit it. I review the return, and then I submit and pay it myself. It hasn't prepared or filed my income taxes. On that side, all it does is keep QuickBooks current."
  - question: "What does this setup cost?"
    answer: "QuickBooks Online on the entry-level plan, Mercury as the bank (no base fee for how I use it), Todoist, and the Claude subscription I already pay for because of client work. I don't have a bookkeeper yet, but I plan to have one review the chart of accounts once there are a few more months of real transactions."
  - question: "Could a small law firm or a local business do this?"
    answer: "Probably, but the software is the smaller part of it. Most of the work in my setup was writing down, in plain words, what I actually do each month and what the rules are. Once that existed, giving it to an agent was straightforward."
  - question: "Does Claude change your books?"
    answer: "Yes, with me. It creates invoices through the QuickBooks connector on its own, and I check each one before it goes out. For categories and the reconciliation, it goes over each change with me first, and nothing is saved until I say yes. Nothing that goes to a client, a vendor, or the state happens without me."
---

On the 12th of every month, at eight in the morning, a worksheet shows up as a comment on a Todoist task called "File and Pay Sales Use Tax." It has last month's Connecticut return worked out line by line, every client payment matched to a bank deposit, and a status at the top: READY, NEEDS REVIEW, or INCOMPLETE. I read it with my coffee. If it says READY, Claude opens the state portal and fills in the return, and I check it, submit it, and pay.

In its first month it did the matching, the math, and the list of things I needed to check.

Most of the money side of this business works that way now, or is heading there. I run a one-person practice. I build websites, AI systems, and software for small firms and local businesses, I do consulting for law firms, startups, and small businesses, and I publish a few apps on the side. Clients pay me to automate the tedious parts of their operations, so it would be a little embarrassing if my own books were a pile of receipts in a drawer. At some point I pointed the same tools at my own bookkeeping, invoicing, and reporting.

## The one rule

Claude doesn't do anything that reaches someone outside my business until I've confirmed it. That covers filing a return with the state, sending an invoice to a client, paying a vendor, and sending an email. Inside the business it does a lot of the work. It creates my invoices, categorizes transactions, and reconciles the bank against QuickBooks. Most of those changes it goes over with me first, and nothing is saved until I say yes. Invoices are the exception. It creates them on its own, and I check each one before it goes out.

I'm a developer, and this is the safeguard I'd put in any system that touches money or other people. If Claude gets something wrong, I'll see it before it reaches a client or the state, and usually before it's saved.

## What's underneath

The bank is Mercury. Every business dollar goes in and out of the LLC's account there. QuickBooks Online, on the entry-level plan, is the books of record for invoices, sales tax, receivables, and the profit and loss, and it pulls the Mercury transactions in through its own bank feed connection to Mercury, so I can see and categorize my Mercury transactions right inside QuickBooks. Mercury and QuickBooks both have connectors for Claude (MCP servers, if you want the technical term), so Claude can read the bank and work in the books directly.

I don't keep the books in a spreadsheet. A spreadsheet is fine for a month of cleanup, but if something gets counted twice in one, I don't want to find that out in April.

Every routine I've built runs on Claude Code, as a scheduled task in the desktop app. It reaches the bank and the books through the Mercury and QuickBooks connectors, and through my own signed-in browser with the Claude in Chrome extension when it needs a screen the connector doesn't cover, and it talks to me through Todoist and Gmail. There's no custom code in any of it. Each routine is a Markdown file in a private repo that says what to read, what to compute, what to flag, and what it isn't allowed to touch. The same repo holds the rest of the rules, like the chart of accounts, how to record a client lunch versus a laptop, and how an owner draw gets labeled so it never looks like an expense. Anything recurring gets written down the same way, with the date it happens and the steps. If I want to change what happens on the 12th, I edit the file. The scheduled task just points at it.

I've looked at the other options for this, Muse and OpenAI's agent tools among them, and I keep coming back to Claude. For this kind of work, reading a bank feed and a set of invoices and reconciling them without inventing anything, Anthropic's Opus 5.5 and Fable models are the ones I trust right now. That could change. Until an agent like Muse or Grokbot ships a model I enjoy working with as much and trust as much, I'm staying with Anthropic.

## The 25th: invoices

On the 25th, QuickBooks creates the month's client invoices from recurring templates, with the lines, the tax, and the due date filled in, and Claude builds any others through the QuickBooks connector. Nothing sends by itself, and Claude can't send them. A Todoist task reminds me the same morning, and I open each invoice, check it against what the engagement actually says, and send it myself. It takes a few minutes a month, and I'd rather keep those minutes than send a client a wrong invoice.

The templates, the steps Claude follows, the reminder, and the check I do are all written down, so the 25th works the same way every month whether or not I remember it.

## Reconciling the bank

Once a month I reconcile Mercury against QuickBooks with Claude. It's on a schedule, but I sit down and go through it myself. Claude looks at each Mercury transaction and what's in QuickBooks, matches them up, and proposes a category for anything that needs one. When it isn't sure what a transaction was for, it asks me, and we talk it through before it picks a category. By the end, QuickBooks should reflect what's actually in the bank, and nothing Claude changes is saved until I've said yes.

## The 12th: sales tax

This is the routine that's turned out to be the most useful so far.

Connecticut taxes different kinds of work at different rates, so what I owe each month depends on which payments actually arrived and how each one splits. That's a reconciliation problem, and reconciliation is easy to put off until the end of the month, or the month after. The tax itself is already on every invoice, because QuickBooks calculates it when the invoice is created, and QuickBooks totals what I collected for the month.

The routine is a Claude Code scheduled task. While it's working out the tax and confirming it, it only reads QuickBooks and the bank. It pulls every payment from QuickBooks, opens each one just long enough to read the date and the amount applied, then goes to Mercury and lists every deposit. It matches payments to deposits in both directions, one to one. A deposit with no QuickBooks payment behind it is the first thing it flags, because that's the case where the return would come out wrong. Then it builds the worksheet, rounds the way the form rounds, and compares its own figure to what QuickBooks says was collected. If there's a difference it can't explain, even a small one, the status is NEEDS REVIEW instead of READY, and it shows me both numbers rather than choosing one.

It also checks that last month's payment to the state actually went through, that the bank feed isn't stale, and whether any new vendor showed up that I need to make a decision on. It lists the vendor and leaves the decision to me.

When it's time to file, Claude goes over the worksheet with me, opens the state's tax portal in my browser through Claude in Chrome, and fills in the return. It doesn't submit it. I review the return and confirm everything, and then I submit and pay it myself.

## Where I come in

Every invoice goes out because I sent it, and every return is filed because I submitted it. When the worksheet or the reconciliation flags something, I'm the one who decides what to do about it. I also sign in to the bank, the books, and the state portal myself, because the routines never get credentials.

Setting the money side up this way has let me spend more of my time on the other parts of the business, the work that brings in revenue, and the business runs more efficiently for it.

## What's next

Two routines are written down and not running yet. One is a Monday-morning check that reads the books and the inbox and tells me what's past due, what's gone quiet, and what's due in the next two weeks. The other is a monthly report for each ongoing client, drafted from what actually shipped and what the numbers did, which I'd review and send with the invoice. I'll write about each one once it has actually run for a month.

If you run a small firm or a local business and the money side is still a shoebox you deal with in April, I wouldn't start with AI. I'd start by writing down what you actually do each month. Once that's on paper, automating it is the easy part.
