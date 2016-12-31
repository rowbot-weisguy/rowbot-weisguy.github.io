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

Here's a couple things I noticed / liked:

1. Use `forEach` to iterate through a NodeList, as was done with `keys` here
2. Prefer named functions for use as event callbacks
3. For data attributes, keep it simple! I don't always need to get the element
and search its `dataset` to take advantage of the selectors.

A nice easy start :)

### Project 2 - CSS + JS Clock

This project makes a clock using JavaScript's built-in `Date` function. It's a
bit simpler than the first project.

Here's the JS:

```js
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const hourDegrees = ((hour / 12) * 360) + 90;
  const minDegrees = ((min / 60) * 360) + 90;
  const secDegrees = ((sec / 60) * 360) + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  secHand.style.transform = `rotate(${secDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
```

It wasn't part of the instructions, but I called `setDate()` once at the end
just to make sure the clock is correct on page load, rather than waiting a full
1000ms for `setInterval` to fire.

The one thing I noticed / liked about this lesson is that using CSS transform's
`rotate()` property can exceed 360deg and it will still look normal as it wraps
back around (i.e. 365deg looks the same as 5deg).
