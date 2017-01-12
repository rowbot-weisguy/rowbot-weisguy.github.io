---
layout: post
title: "JavaScript30 - Part 3"
description: I'm writing JavaScript every day for 30 days to see what I learn.
date:  2017-01-11 10:15:42 PST
emoji: 💻
show_author: true
categories: programming
---

Hello! This is part 3 of a 5 part series sharing my learnings from Wes Bos'
[#JavaScript30](https://javascript30.com/) challenge / course. If you haven't
already, check out my [first](/blog/javascript-30/) and
[second](/blog/javascript-30-part-3) posts before continuing along. By doing
JavaScript exercises every day for 30 days and sharing what I learn, I hope to
better solidify all of this knowledge. Feel free to join! Let me know if you do
so I can cheer you on too.

Let's get to work!

***

## 13 - Slide In On Scroll

Ah yes, what would this course be without an exercise to have elements slide in
on scroll, a la [wow.js](http://mynameismatthieu.com/WOW/). Pretty
straightforward one for me; there's only so many ways you can write this.

<p data-height="265" data-theme-id="0" data-slug-hash="LxNyrQ" data-default-tab="html,result" data-user="rowbot_weisguy" data-embed-version="2" data-pen-title="Slide In On Scroll" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/rowbot_weisguy/pen/LxNyrQ/">Slide In On Scroll</a> by Rowan Weismiller (<a href="http://codepen.io/rowbot_weisguy">@rowbot_weisguy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The biggest thing I appreciated Wes championing using a `debounce` function even
without a framework. I remember it was John Boxall at Mobify who first taught me
about using `debounce` and `throttle` to preserve scroll performance.

The debounce function itself was interesting to read; usually that kinda stuff
is abstracted away behind the `_` of your choice. For reference, here it is:

```js
function debounce(func, wait = 20, immediate = true) {
  var timeout;

  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```

For the sake of rendering plain what can often seem like magic (for myself), I'm
gonna translate it into English. It's a function that you use by passing it a
function you want called, along with a minimum wait time you want for there to
be from the last time it's triggered, to when it finally gets called.

This version of `debounce` has a special third parameter it accepts, `immediate`, which, if true, allows the function to immediately execute without any wait on the first trigger. So in this project, if we wrote:

```js
window.addEventListener('scroll', debounce(checkSlide, 20, true));
```

When we scroll, we would immediately call `checkSlide` once, and then once there
was a 20ms gap between scroll events, we'd see `checkSlide` fire as per the
timeout expiring.

This is different from throttling! Throttling is similar, but would use the 20ms as a maximum frequency that the event can fire at. With this example, throttle would make `checkSlide` fire every 20ms while we were scrolling.

The interesting nuance here from a user experience perspective is when to use
`debounce` or `throttle`. Let's use a different example: a search field that
return previews of results using AJAX as you type. We could throttle the `keypress` events to return results as fast as possible to the user without making excessive AJAX calls on every single `keypress`.

Alternatively, we could find that these AJAX calls aren't returning quickly
enough to give a user that fast, responsive experience. If that's the case we
want to make sure we give our visitor results based on where they stopped
typing, and not irrelevant results based on the half-finished nonsense phrases
along the way.

I enjoyed nerding out here.

***

## 14 - JavaScript References Vs. Copying

This one was way more on the lesson side than it was on the exercise side, so I
didn't bother writing much and just followed along. That said, I did
_definitely_ learn something valuable here: the difference between deep and
shallow object clones.

With a shallow clone, you only bring the first level of an object's properties
into the new cloned object. **The second level properties will still be
references to the prototype object.** With a `cloneDeep` method from lodash or
something similar, then you can clone second level properties and so on. But it
might not always be worth it.

That was my biggest lesson out of that. I remember watching some videos a while
ago, properly Redux related, hearing about "shallow" and "deep" clones of
objects. I had no idea what it meant. This video was a pretty good lesson and
_a-hah_ moment for me.

***

## 15 - LocalStorage

Content

***

OK! That's part three! If you like what I'm sharing here, then I highly encourage
you to go to the [#JavaScript30](https://javascript30.com/) site and sign up to
get this sent to you. It's a fun way to flex your web development muscle. Coding
every day is something I'm excited about.

If you do start, let me know! I want to cheer you on.
