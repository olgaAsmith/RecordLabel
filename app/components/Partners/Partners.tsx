'use client';
import styles from './partners.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
  const partnersRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(`.${styles.partners__item}`);

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -170, scale: 1.4 },
        {
          y: 0,
          scale: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 70%',
            end: '+=200',
            scrub: 4,
          },
        }
      );
    }

    gsap.fromTo(
      items,
      {
        scale: 0,
        opacity: 0,
      },
      {
        rotate: 720,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: {
          each: 0.15,
          from: 'random',
        },
        scrollTrigger: {
          trigger: items,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const logos = [
    {
      id: 1,
      pic: '/images/logo/logo1.svg',
    },
    {
      id: 2,
      pic: '/images/logo/logo2.svg',
    },
    {
      id: 3,
      pic: '/images/logo/logo2.svg',
    },
    {
      id: 4,
      pic: '/images/logo/logo1.svg',
    },
    {
      id: 5,
      pic: '/images/logo/logo2.svg',
    },
    {
      id: 6,
      pic: '/images/logo/logo1.svg',
    },
  ];

  return (
    <section ref={partnersRef} className={`container`}>
      <h2 ref={titleRef}>Our partners</h2>
      <ul className={styles.partners__list}>
        {logos.map((logo) => (
          <li key={logo.id} className={styles.partners__item}>
            <Image
              width={250}
              height={100}
              src={logo.pic}
              alt='Story'
              className={styles.partners__image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
