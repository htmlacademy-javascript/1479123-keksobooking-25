import {typeLabels} from './pools.js';

const fillOrRemoveElement = (element, content) => {
  if(!(element instanceof HTMLElement)){
    return;
  }
  if(typeof content === 'string' && content.length){
    element.innerText = content;
    return;
  }
  element.remove();
};
const findPhotoTemplate = (element) => {
  const template = element.querySelector('.popup__photo');
  template.remove();
  return template;
};
const createNewPhoto = (element) => (src) => {
  const result = element.cloneNode(true);
  result.src = src;
  return result;
};

const fillPhotos = (element, photosURLs) => {
  if(!(element instanceof HTMLElement)){
    return;
  }
  element.append(
    ...photosURLs.map(
      createNewPhoto(
        findPhotoTemplate(element))));
};

const formatPrice = (price) => {
  if(typeof price === 'number'){
    return `${price} ₽/ночь`;
  }
  return undefined;
};

const formatCapacity = (rooms, guests) => {
  if(typeof rooms !== 'number'|| typeof guests !== 'number'){
    return undefined;
  }
  return `${rooms} комнаты для ${guests} гостей`;
};

const formatCheckinCheckout = (checkin, checkout) => {
  if(typeof checkin !== 'string'|| typeof checkout !== 'string'){
    return undefined;
  }
  return `Заезд после ${checkin}, выезд до ${checkout}`;
};

const createIsFeaturePresent = (features) => (element) => features.some(
  (feature) => element.classList.contains(`popup__feature--${feature}`)
);

const renderFeaturesList = (featuresList ,isNecessary) => {
  featuresList.forEach((featuresListItem) => {
    if (!isNecessary(featuresListItem)){
      featuresListItem.remove();
    }
  });
};

const setAuthorAvatar = (element, src) => {
  element.src = src;
};

export const fillTemplate = (element,{offer,author}) => {
  fillOrRemoveElement(
    element.querySelector('.popup__title'),
    offer.title
  );
  fillOrRemoveElement(
    element.querySelector('.popup__text--address'),
    offer.address
  );
  fillOrRemoveElement(
    element.querySelector('.popup__text--price'),
    formatPrice(offer.price)
  );
  fillOrRemoveElement(
    element.querySelector('.popup__type'),
    typeLabels[offer.type]
  );
  fillOrRemoveElement(
    element.querySelector('.popup__text--capacity'),
    formatCapacity(offer.rooms, offer.guests)
  );
  fillOrRemoveElement(
    element.querySelector('.popup__text--time'),
    formatCheckinCheckout(offer.checkin, offer.checkout)
  );

  renderFeaturesList(
    element.querySelectorAll('.popup-feature'),
    createIsFeaturePresent(offer.features)
  );

  fillOrRemoveElement(
    element.querySelector('.popup__description'),
    offer.description
  );

  fillPhotos(
    element.querySelector('.popup__photos'),
    offer.photos
  );

  setAuthorAvatar(
    element.querySelector('.popup__avatar'),
    author
  );
};
