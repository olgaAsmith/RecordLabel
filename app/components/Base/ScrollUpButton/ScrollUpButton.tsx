'use client';
import { useEffect, useState } from 'react';
import styles from './scrollupbutton.module.scss';

export default function ScrollUpButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);
  if (!show) return null;
  return (
    <button
      className={styles.upButton}
      aria-label='Наверх'
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='12' r='12' fill='var(--green)' />
        <path
          d='M8 13l4-4 4 4'
          stroke='#111'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
