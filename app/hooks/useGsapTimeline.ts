import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from '@/app/lib/gsap';

type TimelineFactory = (gsapInstance: typeof gsap) => void;

export function useGsapTimeline(
scope: RefObject<HTMLElement | null>, factory: TimelineFactory) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    if (!scope.current) return;

    ctxRef.current = gsap.context(() => {
      factory(gsap);
    }, scope);

    return () => {
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, [scope, factory]);
}
