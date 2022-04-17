import {posts} from './mock-data.js';
import {fillTemplate} from './offer.js';

//window.console.log({posts});

const test = (container, element) => container.append(element);

test(
  document.querySelector('#map-canvas'),
  fillTemplate(
    document.querySelector('#card').content.cloneNode(true),
    posts[0]
  )
);
