const SITE_URL = 'http://rowanweismiller.com/';

function internalLink(link) {
    return link.attributes.href.value.substring(0, 1) === '/';
}

export default internalLink;
