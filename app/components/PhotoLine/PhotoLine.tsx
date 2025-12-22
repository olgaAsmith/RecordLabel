'use client';

import { useRef } from 'react';
import styles from './photoline.module.scss';
import { useGsapTimeline } from '@/app/hooks/useGsapTimeline';

export default function History() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const lineTopRef = useRef<HTMLDivElement | null>(null);
  const lineBottomRef = useRef<HTMLDivElement | null>(null);

  useGsapTimeline(lineRef, (gsapInstance) => {
    const tl = gsapInstance.timeline({
      scrollTrigger: {
        trigger: lineRef.current,
        start: 'top 20%',
        end: '+=350vh',
        scrub: 4,
      },
    });

    tl.to(lineTopRef.current, {
      yPercent: 100,
      ease: 'none',
    }).to(
      lineBottomRef.current,
      {
        yPercent: 100,
        ease: 'none',
      },
      '<'
    );
  });

  return (
    <section ref={lineRef} className={styles.photoline}>
      <div ref={lineTopRef} className={styles.photoline__top}></div>
      <div ref={lineBottomRef} className={styles.photoline__bottom}></div>
    </section>
  );
}
