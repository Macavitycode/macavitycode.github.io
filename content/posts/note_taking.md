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
I don't mind having to pay for a piece of software I use as long as I can align
myself with the values. As a proponent of free and open source software I am
happy to support projects I use. Thus, this got me interested in an another
fairly popular app that met all these criteria: [Logseq](https://logseq.com/).

Neither Obsidian nor Logseq advertize themselves as note taking apps however.
Both of them are knowledge management tools, that handle your notes. They take
somewhat different approaches to organization but at the end of the day, they
enable you to make notes about absolutely anything, and recall them in any
which way you want. In my projects I tended to leave `README.md` files everywhere,
describing the important things I learned about something specific or some
code snippets on how to run code. Having a knowledge management tool massively
simplifies that for you by making a simple universal place for you to access
your thoughts about a topic. Its a digital notepad that you can `ctrl + f`
through. They serialize your thought process, grouping up important ones and
giving your brain more RAM.

I got very comfortable with Obsidian after using it for around two years,
where I took notes with it, made presentations, documentation,
and made a booklet for myself on any college or Coursera courses.
Obsidian uses a file focused structure, where you work with files, but with
Obsidian as an editor. It enables you to do your own organization using
conventional folder structures and essentially *gets out of your way* while
you work. Logseq's approach seemed more foreign to me at first. Logseq dictates
to you how you should organize your thoughts. You are of course under
compulsion to follow what Logseq suggests, but it makes it clear that theres
a better way to do whatever you were trying to do. This is what I found
annoying about Logseq at first, but upon using it just for a week I immediately
agreed with it.

Logseq is an open book - literally, all their sources are on github [here](https://github.com/logseq/logseq).
It gives you a journal to note down everything - Want to talk about some
projects? Journal; Want to make a quick grocery list? Journal; Anything else?
Journal. This document itself is being written in the journal page of my Logseq
because the way it helps you sort your thoughts is through \#Tags. Tags make
pages in the background, but most importantly, they give context and show all
the back links to the particular \#Tag. For this article for example, I can
structure it like this:

```Markdown
- #Website Notes
  - #Article on [[note taking]]
    - (content for the article)
  - #Article on #Drones
    - (some other content)
```

I can now click on \#Website, to get a list of all things related to \#Website
that I noted, \#Articles to get all the articles I made notes about or the
specific article name (Note taking or Drones). The double square bracket is
functionally the same as a \#. It is a powerful system that is endlessly
extensible.

Now, being familiar with programming, I wanted to extend the functionality of
Logseq through code written in Logseq (you can treat logseq like a Jupyter
notebook). I spent a couple of evenings working out what exactly I wanted to
do and how, and with some help from the community (notably [Mentaloid](https://discuss.logseq.com/u/mentaloid/summary)
on the Logseq forum), I came up with a quick python script, that queries all the
times I've marked something with the \#Expenses, find the relevant entries,
generated a set of graphs showing how much I've spent, on which day, on what,
and with what payment method. Whenever I spent any money, I could quickly jot
it down saying for example:

```Markdown
- Burger for lunch #Expenses
  cost: 4
  type: Food
  mode: Card1
```

When I ran the script, it gives me this:

![graphs](/images/note-taking-2.png)

I cannot stress how useful this has been to track my expenses, and all through
Logseq.

I now use Logseq for almost everything I do digitally. If theres anything to be
noted down, it goes into Logseq. I really like the Logseq project and make a
small monthly contribution to them to support their work. Anyone reading this
should really try it however, it is free to use, open source and very *very*
useful.
