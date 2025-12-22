'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './photoline.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const lineTopRef = useRef<HTMLDivElement | null>(null);
  const lineBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const tl = gsap.timeline({
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

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={lineRef} className={styles.photoline}>
      <div ref={lineTopRef} className={styles.photoline__top}></div>
      <div ref={lineBottomRef} className={styles.photoline__bottom}></div>
    </section>
  );
}
