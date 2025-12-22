'use client';

import Socials from '../Base/Socials/Socials';
import styles from './footer.module.scss';
import { gsap } from '@/app/lib/gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { x: '100%' },
      {
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    return () => {
      gsap.revert();
    };
  }, []);
  return (
    <footer ref={footerRef} className={`${styles.footer}`}>
      <Socials />
      <span>&copy; all rights reserved</span>
    </footer>
  );
}
