---
layout: default
title: Rowan Weismiller | Designer & Developer
description: This is the blog and portfolio of Rowan Weismiller – a designer, front-end developer, and nacho critic making internets in Vancouver, Canada.
---

<div class="opening">
    <h1 class="opening__title">{{ site.author.name }}</h1>
    <p class="opening__subtitle">A designer, front-end developer, and nacho critic making internets in Vancouver, Canada. <a class="link" href="/about/">Read more →</a></p>
</div>

<h2>Recent Posts</h2>
<ul class="posts two-up">
    {% for post in site.posts %}
        {% if post.hidden != true %}
            <li class="two-up__column">
                <a class="card" href="{{ post.url }}">
                    <div class="card__emoji">
                        {{ post.emoji }}
                    </div>
                    <div class="card__text">
                        <h3 class="card__title">{{ post.title }}</h3>
                        <span class="card__subtitle">{{ post.date | date_to_string}}</span>
                    </div>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>
