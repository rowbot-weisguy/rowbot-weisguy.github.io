import { ajaxGet } from '../helpers';
import prismjs from 'prismjs';

const PageLinks = (function() {
  const linkSuffix = 'index.html';
  const animationTime = 300;
  const parser = new DOMParser();
  const content = document.querySelector('.content');
  const title = document.querySelector('title');

  function render(response) {
    let doc = parser.parseFromString(response, 'text/html');
    let payload = doc.querySelector('.content');
    title.textContent = doc.querySelector('title').textContent;
    content.innerHTML = payload.innerHTML;
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
    addListeners();
    window.scroll(0, 0);
    prismjs.highlightAll();
    history.pushState(null, title.textContent, response.url);
  }

  function unload() {
    document.body.classList.remove('is-loaded');
    document.body.classList.add('is-loading');
  }

  function load(url) {
    fetch(url)
      .then(response => response.text())
      .then(render)
      .catch(function(err) {
        throw new Error(err);
      });
  }

  function handleLink(event) {
    event.preventDefault();
    let link = event.currentTarget.attributes.href.value;
    unload();
    load(link);
  }

  function isInternalLink(link) {
    return link.attributes.href.value.substring(0, 1) === '/';
  }

  function addListeners() {
    const links = Array.from(document.querySelectorAll('a'));
    links
      .filter(isInternalLink)
      .forEach(link => link.addEventListener('click', handleLink));
    window.onpopstate = function(e) {
      load(document.location.href);
    };
  }

  return {
    init: function() {
      addListeners();
    },
  };
})();

export default PageLinks;
