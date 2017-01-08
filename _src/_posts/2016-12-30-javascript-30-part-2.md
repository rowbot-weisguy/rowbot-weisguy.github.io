---
layout: post
title: "JavaScript30 - Part 2"
description: I'm writing JavaScript every day for 30 days to see what I learn.
date:  2017-01-01 10:15:42 PST
emoji: 💻
show_author: true
categories: programming
---

Hello! This is part 2 of a 5 part series sharing my learnings from Wes Bos'
[#JavaScript30](https://javascript30.com/) challenge / course. If you haven't
already, check out my [first post](/blog/javascript-30/) before
continuing along. By doing JavaScript exercises every day for 30 days and
sharing what I learn, I hope to better solidify all of this knowledge. Feel free
to join! Let me know if you do so I can cheer you on too.

Let's get to work!

***

## 7 - Array Cardio 2

Ok! Another array exercise. Fun stuff.

This one was a lot shorter. I did learn a couple new functions out of it. I'll
throw the JS right here.

```js
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
function isAdult(person) {
  return (new Date().getFullYear()) - person.year >= 19;
}

const hasAdults = people.some(isAdult);
console.log(hasAdults);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(isAdult);
console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.table(newComments);
```

Here's what I enjoyed / learned from the project:

1. I didn't know about `Array.prototype.some()`, `Array.prototype.every()`, or `Array.prototype.findIndex()`, so that's cool to know.
2. When removing a particular index of an array, it might be a good idea to create a new array with array spreads sliced before and after that index. I have no idea if what I said used correct verbiage at all. Please correct me if possible.

***

## 8 - Fun with HTML5 Canvas

Simple drawing app using the `canvas` HTML5 element. This reminded me a lot of
university, where we used [Processing](https://processing.org/) as a visual way
to learn how to program. It's been a long time since I did this kind of `canvas`
style programming.

<p data-height="265" data-theme-id="0" data-slug-hash="ggObRV" data-default-tab="js,result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Fun with HTML5 Canvas" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/ggObRV/">Fun with HTML5 Canvas</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Here's what I enjoyed / learned from the project:

1. The nostalgia of using code to draw on the screen.
2. How easy canvas is to get started.
3. Wes' aside on how [HSL](http://mothereffinghsl.com/) works was a nice review. HSL ftw.

## 9 - Dev Tools Tricks

A bunch of `console` object demonstrations. I didn't know most of these tbh.

<p data-height="265" data-theme-id="0" data-slug-hash="pRoZpX" data-default-tab="result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Dev Tools Tricks" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/pRoZpX/">Dev Tools Tricks</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Here's what I enjoyed / learned from the project:

1. Styled console logs using `%c`!!! COOOOOOOOL. So pretty!
2. `console.assert()` is also cool. I often find myself wrapping `console.log()`s within an if statement. UNNECESSARY.
3. `console.dir()` seems like it might be useful if I'm really in deep with element properties.
4. `console.group()` looks useful so I don't just spam my console when checking inside of iterators.
5. `console.time()` looks like a poor man's user timings. Quick and dirty.
6. Last but not least, setting a breakpoint on attribute modification, directly from right clicking a DOM node in inspector. I know this exists. I just still always type `debugger` in my code for no reason other than habit.

I can't believe how under-explored the console / inspector is for me! When I was
a kid I grew up checking _all_ the settings of Windows 3.1. That shit was my
JAM! And now here I am, a grown ass professional developer and I ignore half the
options available to me. This lesson woke me up hard!

## 10 - Hold Shift and Check Checkboxes

This exercise has us reproduce the mass-select functionality of shift clicking on checkboxes. I learned a bunch of tidbits along the way, here!

<p data-height="265" data-theme-id="0" data-slug-hash="ZLYeMK" data-default-tab="html,result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Hold Shift & Check Checkboxes" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/ZLYeMK/">Hold Shift & Check Checkboxes</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Since the code was so short, I'll drop it here, too:

```js
let lastChecked = null;
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    const start = checkboxes.indexOf(lastChecked);
    const end = checkboxes.indexOf(this);
    const affected = checkboxes.filter((checkbox, index) => index > start && index < end);
    affected.forEach(checkbox => checkbox.checked = true);
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
```

Here's what I enjoyed / learned from the project:

1. There's an `event.shiftKey` property, but it's only available on certain events (i.e. not `change`).
2. I preferred an alternative to using the `inBetween` variable by getting the indices of the last and current checked checkboxes, then using `Array.prototype.filter()` to get the items within that range.

***

## 11 - Custom Video Player

Video player controls from scratch. Well, Wes started us off with some styles,
but building the event handling that interfaces with an `HTMLMediaElement`. This
might be useful one day soon! I hear Bench wants to do a video campaign...

<p data-height="265" data-theme-id="0" data-slug-hash="apOxvN" data-default-tab="css,result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Custom Video Player" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/apOxvN/">Custom Video Player</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I got started pretty well without watching the lesson, but I ended up tuning in to see how Wes built the scrubber for the video time.

One really cool feature was the handler for the volume and playback rate sliders. Check this out:

```html
<input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
```

```js
function moveSlider(e) {
  video[this.name] = this.value;
}
```

Leaning on conventions for the `name` attribute that map to element properties
in JS is a really elegant solution. I really like that function. I can't imagine
it being any simpler!

Other than that, I just wanna acknowledge how bloated this JavaScript is.
Writing a `querySelector` for each and every element to store in a variable,
plus attaching all the necessary event handlers for each element (sometimes
multiple events). It's gross! Even though this series is Vanilla JS, I think a
declarative framework would make this much more maintainable for the short to
mid-term. In the long-term, vanilla JS would still be better because it wouldn't
go out of style. 😎

***

# 12 - Key Sequence

A Konami code detector, basically. Alright. Cool.

<p data-height="265" data-theme-id="0" data-slug-hash="ggpyrz" data-default-tab="result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Key Detection" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/ggpyrz/">Key Detection</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I just followed along this one. It was really easy and I just wanted to see how
Wes would do it. No surprises, really! I liked unicorns to make things interesting :)

What I _really_ took away from this, though, is the need to add some extra party
to my website. It'll happen.

***

OK! That's part two! If you like what I'm sharing here, then I highly encourage
you to go to the [#JavaScript30](https://javascript30.com/) site and sign up to
get this sent to you. It's a fun way to flex your web development muscle. Coding
every day is something I'm excited about.

If you do start, let me know! I want to cheer you on.
