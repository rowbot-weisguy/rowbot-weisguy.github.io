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
