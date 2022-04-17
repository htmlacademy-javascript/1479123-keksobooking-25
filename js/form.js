const crateSetControlActivity = (isDisabled) => (element) => {
  element.disabled = isDisabled;
};

const setInactiveStateForControls = (elements, isDisabled) => {
  [...elements].forEach(crateSetControlActivity(isDisabled));
};

const crateManageForms = (rules) => (forms) => {
  [...forms].forEach(rules);
};

const createApplyRules = (method, isDisabled)=>(form) =>{
  form.classList[method](form.dataset.disabled);
  setInactiveStateForControls(form.elements, isDisabled);
};

export const setInactiveState = crateManageForms(createApplyRules('add',true));

export const setActiveState = crateManageForms(createApplyRules('remove',false));
