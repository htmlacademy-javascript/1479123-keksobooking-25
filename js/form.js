const form = document.querySelector('.ad-form');
const formElements = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

const accessibilitySwitch = (elements, isDisabled) => {
  elements.forEach(
    (element) => {
      element.disabled = isDisabled;
    });
};

export const inactiveState = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  accessibilitySwitch(formElements, true);
  accessibilitySwitch(mapFiltersElements, true);
};

export const activeState = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  accessibilitySwitch(formElements, false);
  accessibilitySwitch(mapFiltersElements, false);
};
