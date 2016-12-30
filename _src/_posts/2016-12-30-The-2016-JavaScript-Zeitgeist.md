---
layout: post
title: "The 2016 JavaScript Zeitgeist"
date:  2016-12-30 11:27:05 PST
emoji: 🔑
show_author: true
hero: /assets/images/good-news.png
categories: one two
---

I'm trying to get better at JavaScript and I do my best to keep on top of the
current trends as the JavaScript ecosystem evolves. As the year comes to a close
it's a good time to reflect and see if I even understand what's going on around
me in this ecosystem. 

If I were asked to describe the JavaScript zeitgeist today, I'd say it's a
movement away from imperative programming toward declarative programming. Toward
functional programming in particular. The most important functional programming
concepts that have been applied in this regard are higher order functions (e.g.
`map`, `filter`, `reduce`), and immutability. 

We've seen these ideas improve our ability to manage application state by
turning it into a series of trees, with each tree being a reduced snapshot of
the entire state at that moment.

Simultaneously, we've further advanced component driven UI as the norm and so
frameworks like Angular and React have provided the community with opinionated
strategies for writing the views in our applications in a way that affords using
small logic-less components where possible.

These two things pair nicely. With a better mental model for our application
state and a functional programming strategy for transforming that state, the
view itself becomes a tree of components through which we can propagate the
state as a set of properties. The end goal is that the UI displayed to the user
is a pure function of state and components (`UI=f(s,c)`) without unintentional
side effects.

Oh, and ES6! Forget `var`.

So that's my take on what's out there right now. If you're a front-end
developer, I'd love to hear your take on the JavaScript zeitgeist in the
comments. I'm speaking out of ignorance here just to get clear for myself and
provide a perspective for others.
