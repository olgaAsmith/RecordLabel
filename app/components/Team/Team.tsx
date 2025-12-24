'use client';
import Socials from '../Base/Socials/Socials';
import styles from './team.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useGsapTimeline } from '@/app/hooks/useGsapTimeline';
import { team } from '@/app/utils/data';

export default function Team() {
  const teamRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGsapTimeline(teamRef, (gsapInstance) => {
    const items = gsapInstance.utils.toArray<HTMLElement>(
      `.${styles.team__item}`
    );

    if (titleRef.current) {
      gsapInstance.fromTo(
        titleRef.current,
        { y: 150, scale: 1.4 },
        {
          y: 0,
          scale: 1,
          x: '-30%',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 40%',
            end: '+=700',
            scrub: 4,
          },
        }
      );
    }

    gsapInstance.fromTo(
      items,
      {
        x: 150,
        rotateY: -90,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        rotateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        transformPerspective: 1000,
        stagger: 0.45,
        scrollTrigger: {
          trigger: items,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
  return (
    <section ref={teamRef} className={styles.team}>
      <h2 ref={titleRef} className={styles.team__title}>
        {Array(7)
          .fill('Team')
          .map((text, index) => (
            <span key={index}>{text}</span>
          ))}
      </h2>
      <h2 className={styles.team__titleMobile}>Team</h2>
      <ul className={styles.team__list}>
        {team.map((artist, index) => (
          <li key={index} className={styles.team__item}>
            <Image
              width={320}
              height={320}
              src={artist.pic}
              alt={artist.name}
              className={styles.team__image}
            />
            <h3 className={styles.team__name}>{artist.name}</h3>
            <span className={styles.team__position}>{artist.position}</span>
            <Socials customSocials={artist.customSocials} />
            <p className={styles.team__description}>{artist.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
