import { DependencyList, useCallback } from 'react';
import { checkDeps, useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * `useDeepCompareCallback` will return a memoized version of the callback that
 * only changes if one of the `deps` has changed.
 *
 * @param callback A function that will be memoized by the hook
 * @param dependencies If present, the callback will only recomputed when some
 * value inside this array has changed
 *
 * Usage note: only use this if `deps` are objects or arrays that contain
 * objects. Otherwise you should just use React.useEffect.
 *
 */
export function useDeepCompareCallback<T extends (...args: any[]) => any>(callback: T, dependencies: DependencyList) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies, 'useDeepCompareCallback');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, useDeepCompareMemoize(dependencies));
}
