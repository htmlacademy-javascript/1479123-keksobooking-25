import {getRandomInteger} from './random-int.js';
import {getOffer} from './mock-offer.js';
import { getRandomFloat } from './random-float.js';

const checkNumberAvt = (num) => (num >= 10) ? num : `0${num}`;

const getLocation = () => ({
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5)
});

const getPost = (index) => {
  const location = getLocation();
  return ({
    id:index,
    author:`img/avatars/user${checkNumberAvt(getRandomInteger(1, 11))}.png`,
    offer: getOffer(location),
    location
  });};


const makeArray = (length, ctor) => Array.from({length},(_,index) => ctor(index));
const posts = makeArray(25, getPost);
window.console.log({posts});
