import { FIRST_VALUE_ERROR, SECOND_VALUE_ERROR, RANGE_ERROR, DIGITS_ERROR } from './messages.js';

const assertNumber = (value, message) => {
  if(Number.isNaN(value)){
    throw new Error(message);
  }
};

const assertRange = (first, second, message) => {
  if(second <= first){
    throw new Error(message);
  }
};

const assertDigits = (value, message) => {
  if(!Number.isInteger(value) || value < 0){
    throw new Error(message);
  }
};

export const getRandomFloat = (first, second, digits) => {
  assertNumber(first, FIRST_VALUE_ERROR);
  assertNumber(second, SECOND_VALUE_ERROR);
  assertRange(first, second, RANGE_ERROR);
  assertDigits(digits, DIGITS_ERROR);

  const result = Number.parseFloat((Math.random()*(second-first) + first).toFixed(digits));
  if(result < first){
    return first;
  }
  if(result > second){
    return second;
  }
  return result;
};

const titlesPool = [
  'Hilton','Kempinski','Crown Plaza','Holiday Inn','Four Seasons','Kamikadze','Sushi Hotel','Kawasaki','Sudoku','Sumo'
];
const typesPool = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkInPool = ['12:00', '13:00', '14:00'];
const featuresPool = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptionsList = ['sea view','park view','infinity pool','king size bed', 'animals allowed', 'not far from city center', 'bed for baby', 'smoking allowed'];
const photosPool = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomInteger = (min, max) => {
  if(!Number.isInteger(min)){
    throw new Error('min is not a whole number!');
  }
  if(!Number.isInteger(max)){
    throw new Error('max is not a whole number!');
  }
  if(min >= max){
    throw new Error('max should be grater than min');
  }
  const factor = max - min;
  const result = min + factor * Math.random();
  return Math.floor(result);
};

const getLocation = () => ({
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5)
});

const checkNumberAvt = (num) => (num >= 10) ? num : `0${num}`;
const getRandomItem = (items) => items[getRandomInteger(0,items.length)];
const getAddressFromLocation = (location) => `${location.lat},${location.lng}`;
const getItemWithWeight = (item) => ({item, weight: Math.random()});
const compareWeight = (left, right) => left.weight - right.weight;
const getItemFromObj = (obj) => obj.item;
const permute = (items) => items.map(getItemWithWeight).sort(compareWeight).map(getItemFromObj);
const getSubArrayRandom = (items) => items.slice(0, getRandomInteger(0,items.length));


const getOffer = (location) => {
  const checkIn = getRandomItem(checkInPool);
  return({
    title:getRandomItem(titlesPool),// строка — заголовок предложения. Придумайте самостоятельно.

    address: getAddressFromLocation(location),// строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

    price: getRandomInteger(0,Number.MAX_SAFE_INTEGER),// Обозначить волшебные числа, число — стоимость. Случайное целое положительное число.

    type:getRandomItem(typesPool),// строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

    rooms: getRandomInteger(0,Number.MAX_SAFE_INTEGER),// Обозначить волшебные числа, число — стоимость.число — количество комнат. Случайное целое положительное число.

    guests: getRandomInteger(0,Number.MAX_SAFE_INTEGER),// Обозначить волшебные числа, число — стоимость.,// число — количество гостей, которое можно разместить. Случайное целое положительное число.

    checkin:checkIn,// строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    checkout:checkIn,// строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    features: getSubArrayRandom(permute(featuresPool)),// массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

    description: getRandomItem(descriptionsList),// строка — описание помещения. Придумайте самостоятельно.

    photos: getSubArrayRandom(permute(photosPool)),// массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.


  });};
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
