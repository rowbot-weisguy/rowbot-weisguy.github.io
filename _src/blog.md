---
layout: default
title: Articles | Rowan Weismiller | Designer & Developer
---

<div class="opening">
  <h1>Articles</h1>
</div>

<ul class="posts two-up">
  {% for post in site.posts %}
    <li class="two-up__column">
      <a class="card" href="{{ post.url }}">
        <div class="card__emoji">
          {{ post.emoji }}
        </div>
        <div class="card__text">
          <h3 class="card__title">{{ post.title }}</h3>
          <span class="card__subtitle">{{ post.date | date_to_string }}</span>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>
