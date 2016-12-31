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
what I learn with others, so this is my first out of 5 posts on this. I'll put
out roughly one post per week sharing a short recap.

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

### Project 3 - Playing with CSS Variables and JS

This project controls an image's styling with some basic inputs (sliders, color
picker) in order to demonstrate the power of CSS variables.

Anyway!

Data attributes and `dataset`.

Here's a CodePen:

<p data-height="300" data-theme-id="0" data-slug-hash="mRbWwb" data-default-tab="html,result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Playing with CSS Variables and JS" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/mRbWwb/">Playing with CSS Variables and JS</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I enjoyed this one because Wes took a moment to talk about a few small details.

I liked a few things:

1. Wes talked a bit about Node Lists, indirectly addressing the first comment I
made on Project 1. He explained that there is very limited functionality on the
NodeList's prototype, meaning we don't get cool functions like `map`, `reduce`,
or `filter`. When we need those kinds of functions, we can convert a NodeList
into an Array. I've done this before, but I wasn't sure when or not to do it.

2. This exercise actually use the `dataset` property of an element to access the
values of the data attributes on it. The difference between this one and the
first exercise's use of data attributes, is that accessing `dataset` isn't picky
about whether or not a certain data attribute is present, whereas the selector
predicts an element will exist with a certain attribute value.

3. CSS variables are accessible via JavaScript on any DOM node using `style`'s
`setProperty` method. In the following function example, we are listening to
updates on input elements, and then re-assigning a CSS variable on the document
root with the same `name` as the input, and using the input's value as the CSS
variable's value.

```js
function handleUpdate(e) {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
```

Great stuff! I understand better now how CSS variables are better than the SASS
equivalent.

### Project 4 - Array Cardio

This was a pure JS exercise in array manipulation using higher order functions.

I loved it! It was quite fun. This is stuff I'm already getting a bit familiar
with in my work at Bench and often have fun solving. 

Here's a CodePen:

<p data-height="300" data-theme-id="0" data-slug-hash="RKbVgK" data-default-tab="html,result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Array Cardio" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/RKbVgK/">Array Cardio</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Here's what I enjoyed / learned from the project:

1. There's a `console.table()` method that's handy for printing out arrays of objects, which is pretty common for me.
2. `Array.prototype.sort()` will automatically sort descending (for numberic arrays) or alphabetically (for string arrays) when called without passing any arguments.

One note, looking at this code example:

```js
const streetsWithDe = links
                        .map(link => link.textContent)
                        .filter(text => text.includes('de'));
```

That `includes()` function is available to both `Array.prototype` and
`String.prototype`, but it's a tad confusing that the `String.prototype`
implementation is an ES6 standard, while the `Array.prototype` implementation is
an ES7 standard.
