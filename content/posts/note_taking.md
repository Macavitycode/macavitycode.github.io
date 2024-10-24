---
title: 'On Note Taking'
date: 2024-09-25T23:17:40+02:00
featured_image: '/featuredImages/note-taking.png'
tags: ['Note taking']
featured: true
---

Having started a Masters' course recently, I found myself once again in need
of a good note taking application. As a student I'd gone through a couple of
options before -  [Obsidian](https://obsidian.md/), using manually set up sync
across my devices - but I was looking to change somethings.
I jotted down some requirements for a note taking app, namely
that it needed to (a) work with markdown files (b) be free and open source.
Now, I don't mind having to pay for a piece of software I use as long as I can
justify the cost to myself. As a proponent of free and open source software I
am happy to support projects I use. Thus, this got me interested in an another
fairly popular app that met all these criteria: [Logseq](https://logseq.com/).

Neither Obsidian nor Logseq advertize themselves as *note taking* apps. Both of
them claim to be knowledge management tools, that handle your notes. They take
somewhat different approaches to organization, but at the end of the day, they
enable you to make notes about absolutely anything, and recall them in any
which way you want. In my projects I tended to leave ***`README.md`*** files
everywhere, describing the important things I learned about something specific
or some code snippets on how to run code. Having a knowledge management tool
massively simplifies that for you by making a simple universal place for you to
access your thoughts about a topic. Its a digital notepad that you can
***`ctrl + f`*** through. They serialize your thought process, grouping up
important ones and giving your brain more **RAM**.

I got very comfortable with Obsidian after using it for around two weeks,
and continued to use it for years. I took notes with it, made presentations,
documentation, and made a booklets for myself on any college or Coursera
courses I took. Obsidian uses a file focused structure, where you work with
files, but with Obsidian as an editor. It enables you to do your own
organization using conventional folder structures and essentially *gets out of
your way* while you work.

Logseq's default approach seemed more foreign to me at first. Logseq guides you
to organize your thoughts its way. You are of course under no
compulsion to follow what Logseq suggests, but Logseq makes it clear that
theres a better way to do whatever you were trying to do. This is what I found
annoying about Logseq at first, but upon using it for a week or so I
grew to see it's perspective.

Logseq gives you a journal to note down everything - Want to talk about some
projects? Journal; Want to make a quick grocery list? Journal; Anything else?
Journal. This document itself is being written in the journal page of my Logseq
Vault. The way Logseq helps you sort your thoughts is through ***\#Tags***.
Tags make pages in the background, but most importantly, on the page of a given
***\#Tag*** you can see all the **back-links** to that particular ***\#Tag***.
For this article for example, I have built a structure like this:

```Markdown
- #Website Notes
  - #Article on [[note taking]]
    - (content for the article)
  - #Article on #Drones
    - (some other content)
```

I can now click on ***Website*** tag to get a list of all things related to
***Website*** that I noted, or click on the ***Articles*** tag to get all the
articles I made notes about or click on ***Note taking*** or ***Drones*** to
see my notes on those. The double square bracket is functionally identical to a
\#. It is a powerful system that is endlessly extensible.

---

#### Logseq is *Amazing*

---

Logseq is an open book - literally, their source code is on github [here](https://github.com/logseq/logseq).
Now, being familiar with programming, I wanted to extend the functionality of
Logseq through code written in Logseq (you can treat logseq like a Jupyter
notebook). I spent a couple of evenings working out what exactly I wanted to
do and how, and with some help from the community (notably [Mentaloid](https://discuss.logseq.com/u/mentaloid/summary)
on the Logseq forum), I came up with a quick python script, that queries all the
times I've marked something with ***\#Expenses***, finds the entries with
properties mentioned, and generates a set of graphs showing how much I've
spent. I can track what I've spent money on, on which day, and using what.
Whenever I spent any money, I could quickly jot it down saying for example:

```Markdown
- Burger for lunch #Expenses
  cost: 4
  type: Food
  mode: Card1
```

When I run the script, it gives me this:

![graphs](/images/note-taking-2.png)

I cannot stress how useful this has been to track my expenses, and all through
Logseq.

You can sync your changes through git. The have documentation on how you can
do it yourself, or, if you are lazy, you can pay them to do it for you.

If theres anything to be noted down, it goes into Logseq.
I really like the Logseq project and make a
small monthly contribution to them to support their work.
I now use Logseq for almost everything I do digitally.

**To anyone reading this: try Logseq, it is free to use, open source, and very
*very* helpful.**
