
export const getRandomInteger = (min, max) => {
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
