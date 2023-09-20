// useComponentDidMount hook
// Usage: useComponentDidMount(() => { console.log('Component mounted!') })
// This hook is used to run a function when a component is mounted.
// It is equivalent to componentDidMount lifecycle method.

// IMPORTANT: every component using this hook should have "use client";
//            because this hook uses useEffect, which is a client-side hook.

import { useEffect } from 'react';

export function useComponentDidMount(func: () => void) {
  useEffect(() => {
    console.log('[useComponentDidMount] Component mounted!');
    func();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
