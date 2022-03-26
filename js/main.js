import { getPost } from './mock-post.js';


const makeArray = (length, ctor) => Array.from({length},(_,index) => ctor(index));
const posts = makeArray(25, getPost);
window.console.log({posts});
