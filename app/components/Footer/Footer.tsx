'use client';

import Socials from '../Base/Socials/Socials';
import styles from './footer.module.scss';
import { useRef } from 'react';
import { useGsapTimeline } from '@/app/hooks/useGsapTimeline';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGsapTimeline(footerRef, (gsapInstance) => {
    gsapInstance.fromTo(
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
  });

  return (
    <footer ref={footerRef} className={`${styles.footer}`}>
      <Socials />
      <span>&copy; all rights reserved</span>
    </footer>
  );
}

