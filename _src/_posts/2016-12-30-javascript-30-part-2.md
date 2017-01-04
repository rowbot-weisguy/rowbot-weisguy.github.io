---
layout: post
title: "JavaScript30 - Part 2"
description: I'm writing JavaScript every day for 30 days to see what I learn.
date:  2017-01-01 10:15:42 PST
emoji: 💻
show_author: true
categories: programming
hidden: true
---

Hello! This is part 2 of a 5 part series sharing my learnings from Wes Bos'
[#JavaScript30](https://javascript30.com/) challenge / course. If you haven't
already, check out my [first post](/blog/my-javascript-30-journey/) before
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
