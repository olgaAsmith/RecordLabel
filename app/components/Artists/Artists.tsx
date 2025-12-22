'use client';
import styles from './artists.module.scss';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { artists } from '@/app/utils/data';
import { gsap } from '@/app/lib/gsap';

export default function Artists() {
  const artistsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: artistsRef.current,
        start: 'top top',
        end: '+=250vh',
        scrub: 6,
        pin: true,
      },
    });
    tl.to(titleRef.current, { x: '-50%' });
    tl.to(listRef.current, { x: '-55%' }, '<');

    return () => {
      tl.revert();
    };
  }, []);

  return (
    <section ref={artistsRef} className={styles.artists}>
      <h2 ref={titleRef} className={styles.artists__title}>
        {Array(6)
          .fill('Artists')
          .map((text, index) => (
            <span key={index}>{text}</span>
          ))}
      </h2>

      <ul ref={listRef} className={styles.artists__list}>
        {artists.map((artist, index) => (
          <li key={index} className={styles.artists__item}>
            <Image
              width={450}
              height={450}
              src={artist.pic}
              alt={artist.name}
              className={styles.artists__image}
            />
            <h3 className={styles.artists__name}>{artist.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
