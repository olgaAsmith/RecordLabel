'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../Base/Button/Button';
import Equa from './Equa/Equa';
import styles from './hero.module.scss';

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const equaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(bgRef.current, {
      scale: 1.5,
      duration: 60,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
      ease: 'none',
    })
      .fromTo(
        titleRef.current,
        {
          x: -200,
          scale: 0,
          duration: 0.8,
        },
        {
          x: 0,
          scale: 1,
          duration: 0.8,
        },
        '<'
      )
      .fromTo(
        textRef.current,
        {
          x: -200,
          scale: 0,
          duration: 0.8,
        },
        {
          x: 0,
          scale: 1,
          duration: 0.8,
        },
        '<'
      )
      .fromTo(
        equaRef.current,
        {
          x: 200,
          scale: 0,
          duration: 0.8,
        },
        {
          x: 0,
          scale: 1,
          duration: 0.8,
        },
        '+=0.2'
      )
      .fromTo(
        buttonRef.current,
        {
          x: -200,
          opacity: 0,
          duration: 0.1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.1,
        },
        '+=0.2'
      )
      .to(
        buttonRef.current,
        {
          scale: 1.1,
          duration: 0.2,
          ease: 'bounce.out',
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.3,
          y: 10,
        },
        '+=0.5'
      );
  }, []);

  return (
    <section className={`container ${styles.hero}`}>
      <div ref={bgRef} className={styles.hero__background}></div>
      <div className={styles.hero__main}>
        <h1 className={styles.hero__title} ref={titleRef}>
          Record Label
        </h1>
        <p ref={textRef}>
          Record Label is an independent company crafting genre-defying releases
          that blend artistic vision with cutting-edge production
        </p>
        <Button ref={buttonRef} text='Learn more' />
      </div>
      <div className={styles.hero__image} ref={equaRef}>
        <Equa />
      </div>
    </section>
  );
}
