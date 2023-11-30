export const useDebounce = (callbackFn, time = 500) => {
  let timer = null;
  return (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn(event);
    }, time);
  };
};
