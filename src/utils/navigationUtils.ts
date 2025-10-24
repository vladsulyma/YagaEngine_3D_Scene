export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const debounceScroll = (callback: () => void, delay = 800) => {
  let isScrolling = false;

  return () => {
    if (isScrolling) return;
    isScrolling = true;
    callback();
    setTimeout(() => (isScrolling = false), delay);
  };
};
