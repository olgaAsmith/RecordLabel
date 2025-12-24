import { RefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from '@/app/lib/gsap';

type TimelineFactory = (gsapInstance: typeof gsap) => void;

export function useGsapTimeline(
  scope: RefObject<HTMLElement | null>,
  factory: TimelineFactory,
  minWidth: number = 1025
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    if (!scope.current) return;

    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);

    const runAnimation = () => {
      ctxRef.current?.revert();
      ctxRef.current = null;

      if (mq.matches) {
        ctxRef.current = gsap.context(() => {
          factory(gsap);
        }, scope);
      }
    };

    runAnimation();
    mq.addEventListener('change', runAnimation);

    return () => {
      ctxRef.current?.revert();
      ctxRef.current = null;
      mq.removeEventListener('change', runAnimation);
    };
  }, [scope, factory, minWidth]);
}
