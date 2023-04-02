type FuncType = (...args: any[]) => any;

export const debounce = <F extends FuncType>(func: F, wait: number): F => {
  let timeout: ReturnType<typeof window.setTimeout> | undefined;

  return function (this: any, ...args: Parameters<F>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    const later = function () {
      timeout = undefined;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  } as F;
};
