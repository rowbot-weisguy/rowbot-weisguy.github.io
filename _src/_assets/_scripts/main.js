import 'whatwg-fetch';
import prismjs from 'prismjs';
import analytics from './components/analytics';
import greeting from './components/greeting';
import Party from './components/Party';
import PageLinks from './components/PageLinks';

prismjs.highlightAll();

Party.init();
PageLinks.init();
