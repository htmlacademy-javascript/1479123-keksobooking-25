export const makeArray = (length, ctor) => Array.from({length},(_,index) => ctor(index));
