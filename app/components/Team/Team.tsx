'use client';
import Socials from '../Base/Socials/Socials';
import styles from './team.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const team = [
    {
      name: 'Shaky Lake',
      pic: '/images/team/team_shaky.webp',
      position: 'Founder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      customSocials: [
        {
          name: 'Twitter',
          href: '##',
          icon: '/icons/socials/twitter.svg',
        },
        {
          name: 'LinkedIn',
          href: '##',
          icon: '/icons/socials/linkedin.svg',
        },
      ],
    },
    {
      name: 'Baky Hike',
      pic: '/images/team/team_baky.webp',
      position: 'Co-founder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      customSocials: [
        {
          name: 'Twitter',
          href: '##',
          icon: '/icons/socials/twitter.svg',
        },
        {
          name: 'LinkedIn',
          href: '##e',
          icon: '/icons/socials/linkedin.svg',
        },
      ],
    },
    {
      name: 'Vania Do',
      pic: '/images/team/team_vania.webp',
      position: 'Producer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      customSocials: [
        {
          name: 'Twitter',
          href: '##',
          icon: '/icons/socials/twitter.svg',
        },
        {
          name: 'LinkedIn',
          href: '##',
          icon: '/icons/socials/linkedin.svg',
        },
      ],
    },
  ];
  const teamRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(`.${styles.team__item}`);

    if (titleRef.current) {
      gsap.fromTo(
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

    gsap.fromTo(
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
  }, []);
  return (
    <section ref={teamRef} className={styles.team}>
      <h2 ref={titleRef} className={styles.team__title}>
        {Array(7)
          .fill('Team')
          .map((text, index) => (
            <span key={index}>{text}</span>
          ))}
      </h2>

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
