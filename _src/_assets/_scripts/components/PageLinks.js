import h from '../helpers/helpers';

const PageLinks = (function() {
    const LINK_SUFFIX = 'raw.json';
    const COMMENTS_MSG = '<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>';

    const content = document.querySelector('.content');
    const main = document.querySelector('.main');
    const title = document.querySelector('title');

    function render(page) {
        let hero = document.querySelector('.hero');

        title.textContent = page.title;
        main.innerHTML = page.content;
        main.classList.remove('main--hero');

        if (hero) content.removeChild(hero);
        if (page.hero) renderHero(page.hero);
        if (page.show_author) renderAuthor(page.datestring, page.author);
        if (page.layout === 'post') {
            renderOpening(page.title, page.datestring);
            renderComments();
        }

        addListeners();
        window.scroll(0, 0);
    }

    function renderOpening(title, date) {
        let component = h.createElement('div', 'opening');
        let titleEl = h.createElement('h1', 'opening__title');
        let dateEl = h.createElement('p', 'opening__meta');

        titleEl.textContent = title;
        dateEl.textContent = 'Posted on ' + date;

        component.appendChild(titleEl);
        component.appendChild(dateEl);

        main.insertBefore(component, main.firstChild);
    }

    function renderAuthor(date, author) {
        let component = h.createElement('div', 'author');
        let avatar = h.createElement('img', 'author__avatar');
        let textwrap = h.createElement('div', 'author__text');
        let subtext = h.createElement('p', 'author__date');
        let name = h.createElement('p', 'author__name');
        let bio = h.createElement('p', 'author__bio');

        avatar.src = author.avatar_url;
        subtext.textContent = 'Written on ' + date + ' by:';
        name.textContent = author.name;
        bio.textContent = author.bio;

        textwrap.appendChild(subtext);
        textwrap.appendChild(name);
        textwrap.appendChild(bio);
        component.appendChild(avatar);
        component.appendChild(textwrap);

        main.appendChild(component);
    }

    function renderComments() {
        let comments = document.createElement('div');
        let d = document;
        let s = d.createElement('script');

        comments.setAttribute('id', 'disqus_thread');
        main.appendChild(comments);
        s.src = '//rowanweismiller.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }

    function renderHero(src) {
        let component = h.createElement('div', 'hero');
        let img = h.createElement('img', 'hero__image');
        img.src = src;
        component.appendChild(img);
        main.classList.add('main--hero');
        content.insertBefore(component, main);
    }

    function load(url) {
        h.ajaxGet(url + LINK_SUFFIX)
            .catch(function(error) { throw new AJAXError(error); })
            .then(JSON.parse)
            .catch(function(error) { throw new JSONError(error); })
            .then((r) => render(r))
            .catch(function(error) { throw new ApplicationError(error); });
    }

    function handleLinkClick(event) {
        event.preventDefault();
        let link = event.currentTarget.attributes.href.value;
        load(link);
    }

    function addListeners() {
        let links = [].slice.call(document.querySelectorAll('a'));
        links.filter(h.internalLink).map(listen);
    }

    function listen(link) {
        link.addEventListener('click', handleLinkClick);
    }

    return {
        init: function() {
            addListeners();
        }
    };
}());

export default PageLinks;
