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

window.console.log(getRandomFloat(30.748, 32.78787, 1));

const new_Object = {
  author: img/avatars/user{{xx}}.png, //{{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

  offer, объект — содержит информацию об объявлении. Состоит из полей:

  title, строка — заголовок предложения. Придумайте самостоятельно.

  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

  price, число — стоимость. Случайное целое положительное число.

  type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

  rooms, число — количество комнат. Случайное целое положительное число.

  guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

  checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

  description, строка — описание помещения. Придумайте самостоятельно.

  photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

  location, объект — местоположение в виде географических координат. Состоит из двух полей:

  lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

  lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
}
