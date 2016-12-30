---
layout: post
title: "My JavaScript 30 Journey"
date:  2016-12-30 10:15:42 PST
emoji: 💻
show_author: true
categories: programming
---

Improving my JavaScript skills is important to me. It's like the English of
programming languages right now, so I'm glad I started my career out on the web
where JS was born. It is a very flexible language, and so there are a vast
number utilities and frameworks created to champion different approaches. The
JavaScript zeitgeist is felt strongly by those in the field of front-end
development.

With all this going on, I have a basic problem: I haven't written enough
JavaScript to _really_ grok the context for the language's development. I'm a
relative noob in the JS world. I've only been writing JS for 3 years, and only
in the last year has it become more of a focus for me.

So I decided to take Wes Bos' [JavaScript 30](https://javascript30.com/) coding
challenge / course. I want to document it so I get more out of it while sharing
what I learn with others, so this is my first out of 4 posts on this. I'll put
out one post per week sharing a short recap.

Let's get to work!

===

### Project 1 - Keyboard Drumkit

This project maps the keys A through L on the keyboard to a corresponding drum
sound effect, and shows a visual key as feedback for the user. When a key is
tapped, a short transition effect gets played on the visual representation of
that key.

Here's the JS:

```js
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
```

Most of this was review for me, but I did take notice of a couple things I liked.

1. Use `forEach` to iterate through a NodeList, as was done with `keys` here
2. Prefer named functions for use as event callbacks
3. For data attributes, keep it simple! I don't always need to get the element
and search its `dataset` to take advantage of the selectors.

A nice easy start :)
