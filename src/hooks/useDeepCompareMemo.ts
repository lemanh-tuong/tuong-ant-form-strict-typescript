import { useMemo } from 'react';
import { checkDeps, useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * `useDeepCompareMemo` will only recompute the memoized value when one of the
 * `deps` has changed.
 *
 * Usage note: only use this if `deps` are objects or arrays that contain
 * objects. Otherwise you should just use React.useMemo.
 *
 */
export function useDeepCompareMemo<T>(factory: () => T, dependencies: React.DependencyList) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies, 'useDeepCompareMemo');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, useDeepCompareMemoize(dependencies));
}
