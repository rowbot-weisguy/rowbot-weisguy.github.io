---
layout: default
title: Rowan Weismiller | Designer & Developer
---

<div class="opening">
    <h1 class="opening__title">{{ site.author.name }}</h1>
    <p class="opening__subtitle">A designer, front-end developer, and <a class="link" href="//thenachoclub.com/">nacho critic</a> making internets in Vancouver, Canada.</p>
</div>

<div class="two-up">
    <div class="two-up__column">
        <h2>Some Articles</h2>
        <ul class="posts">
            {% for post in site.posts %}
                <li class="post">
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
    </div>
    <div class="two-up__column">
        <h2>Some Projects</h2>
        <ul class="posts">
            {% for post in site.posts %}
                <li class="post">
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
    </div>
</div>