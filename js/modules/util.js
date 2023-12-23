export const addPreload = (elem) => {
  elem.classList.add('preload');
};

export const removePreload = (elem) => {
  setTimeout(() => {
    elem.classList.remove('preload');
  }, 500)
};