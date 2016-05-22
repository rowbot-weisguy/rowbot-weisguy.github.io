import h from '../helpers/helpers';

const PageLinks = (function() {
    const LINK_SUFFIX = 'index.html';

    const parser = new DOMParser();

    const content = document.querySelector('.content');
    const title = document.querySelector('title');

    function render(page, url) {
        let doc = parser.parseFromString(page, "text/html");
        let payload = doc.querySelector('.content');
        title.textContent = doc.querySelector('title').textContent;
        content.innerHTML = payload.innerHTML;

        addListeners();
        window.scroll(0, 0);
        history.pushState(null, title.textContent, url);
    }

    function load(url) {
        h.ajaxGet(url + LINK_SUFFIX)
            .catch(function(error) { throw new AJAXError(error); })
            .then((r) => render(r, url))
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

        window.onpopstate = function(e) {
            load(document.location.href);
        }
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
