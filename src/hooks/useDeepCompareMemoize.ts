import { equals } from 'ramda';
import { DependencyList, useRef } from 'react';

export function checkDeps(deps: React.DependencyList, name: string) {
  const reactHookName = `React.${name.replace(/DeepCompare/, '')}`;

  if (!deps || deps.length === 0) {
    throw new Error(`${name} should not be used with no dependencies. Use ${reactHookName} instead.`);
  }
}

export function useDeepCompareMemoize(value: React.DependencyList) {
  const ref = useRef<DependencyList>([]);

  if (!equals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}
