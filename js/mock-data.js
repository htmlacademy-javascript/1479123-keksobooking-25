import { makeArray } from './list-generator.js';
import { getPost } from './mock-post.js';

export const posts = makeArray(25, getPost);
