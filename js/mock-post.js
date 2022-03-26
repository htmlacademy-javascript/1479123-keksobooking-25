import { getOffer } from './mock-offer';
import { getRandomFloat } from './random-float';
import { getRandomInteger } from './random-int';

const checkNumberAvt = (num) => (num >= 10) ? num : `0${num}`;

const getLocation = () => ({
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5)
});

export const getPost = (index) => {
  const location = getLocation();
  return ({
    id:index,
    author:`img/avatars/user${checkNumberAvt(getRandomInteger(1, 11))}.png`,
    offer: getOffer(location),
    location
  });};
