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

