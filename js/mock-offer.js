import {titlesPool, typesPool, checkInPool, featuresPool, descriptionsList, photosPool} from './pools.js';
import {getRandomInteger} from './random-int.js';

const getRandomItem = (items) => items[getRandomInteger(0,items.length)];
const getAddressFromLocation = (location) => `${location.lat},${location.lng}`;
const getItemWithWeight = (item) => ({item, weight: Math.random()});
const compareWeight = (left, right) => left.weight - right.weight;
const getItemFromObj = (obj) => obj.item;
const permute = (items) => items.map(getItemWithWeight).sort(compareWeight).map(getItemFromObj);
const getSubArrayRandom = (items) => items.slice(0, getRandomInteger(0,items.length));


export const getOffer = (location) => {
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
