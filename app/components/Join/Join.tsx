'use client';
import Button from '../Base/Button/Button';
import styles from './join.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Join() {
  const joinRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!joinRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: joinRef.current,
        start: 'top 40%',
        end: '+=200',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      titleRef.current,
      { x: -370, scale: 0 },
      {
        x: 0,
        scale: 1,
        duration: 1,
        ease: 'back.out(2)',
      }
    )
      .fromTo(
        textRef.current,
        { x: -370, scale: 0 },
        {
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(2)',
        },
        '-=0.8'
      )
      .fromTo(
        buttonRef.current,
        { x: -370, scale: 0 },
        {
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(2)',
        },
        '-=0.8'
      )
      .fromTo(
        imageRef.current,
        {
          scale: 0,
          rotateX: 0,
          rotateY: 0,
        },
        {
          scale: 1,
          rotateX: -360,
          rotateY: -360,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      );

    tl.call(() => {
      const hitTl = gsap.timeline({ repeat: -1 });
      hitTl
        .to(buttonRef.current, { scale: 1.1, duration: 0.15, ease: 'power1.inOut' })
        .to(buttonRef.current, { scale: 1, duration: 0.45, ease: 'power1.inOut' })
        .to(buttonRef.current, { scale: 1.1, duration: 0.15, ease: 'power1.inOut' })
        .to(buttonRef.current, { scale: 1, duration: 0.45, ease: 'power1.inOut' })
        .to(buttonRef.current, { scale: 1, duration: 0.5 });
    });
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={joinRef} className={`container ${styles.join}`} id='contact'>
      <div className={styles.join__container}>
        <div className={styles.join__info}>
          <h2 ref={titleRef}>Join us</h2>
          <p ref={textRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div ref={buttonRef} className={styles.join__button}>
            <Button text='Join us'></Button>
          </div>
        </div>
        <div className={styles.join__pic} ref={imageRef}>
          <Image
            width={580}
            height={580}
            src='/images/wave/pink_wave.webp'
            alt='Wave'
            className={styles.join__image}
          />
        </div>
      </div>
    </section>
  );
}
