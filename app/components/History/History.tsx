'use client';

import styles from './history.module.scss';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import MainText from '../Base/MainText/MainText';

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: 'Our founders',
    subtitle:
      'Record Label was founded by Shaky Lake and Baky Hike in 2020 business accelerator.',
    textTop:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    textMiddle:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textBottom:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: '/images/story.webp',
  },
  {
    title: 'Partners',
    subtitle: 'Record Label partners',
    textTop:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    textMiddle:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textBottom:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: '/images/story.webp',
  },
  {
    title: 'The future',
    subtitle: 'Record Label future',
    textTop:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    textMiddle:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textBottom:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: '/images/story.webp',
  },
];

export default function History() {
  const storyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storytellRef = useRef<HTMLDivElement>(null);
  const tabTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: 'top 10%',
        end: 'top top',
        scrub: 1,
        
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 200, scale: 1.5 },
      { y: 0, scale: 1 }
    ).fromTo(
      storytellRef.current,
      { opacity: 0, y: 350 },
      { opacity: 1, y: 0 },
      '<'
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const tabCount = content.length;
    let currentIndex = 0;

    tabTriggerRef.current = ScrollTrigger.create({
      trigger: storyRef.current,
      start: 'top top',
      end: '+=350vh',
      pin: true,
      scrub: 4,
        pinSpacing: true,

      snap: 1 / (tabCount - 1),

      onUpdate: (self) => {
        const idx = Math.round(self.progress * (tabCount - 1));

        if (idx !== currentIndex) {
          currentIndex = idx;
          setFade(false);

          gsap.delayedCall(0.3, () => {
            setActiveTab(idx);
            setFade(true);
          });
        }
      },
    });

    return () => {
      tabTriggerRef.current?.kill();
      tabTriggerRef.current = null;
    };
  }, []);

  const handleTabClick = (idx: number) => {
    if (!tabTriggerRef.current) return;

    const progress = idx / (content.length - 1);

    gsap.to(tabTriggerRef.current, {
      progress,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={storyRef}
      className={`container ${styles.history}`}
      id="story"
    >
      <h2 ref={titleRef}>The Story</h2>

      <div ref={storytellRef} className={styles.history__container}>
        <div className={styles.history__tabs}>
          <ul className={styles.history__list}>
            {content.map((item, idx) => (
              <li
                key={item.title}
                className={`${styles.history__tab} ${
                  idx === activeTab ? styles.history__active : ''
                }`}
                onClick={() => handleTabClick(idx)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.history__content}>
          <div
            className={`${styles.history__imagewrapper} ${
              styles.history__fadeWrapper
            } ${fade ? styles['history__fadeWrapper--visible'] : ''}`}
          >
            <Image
              width={170}
              height={250}
              src={content[activeTab].imageUrl}
              alt="Story"
              className={styles.history__image}
            />
          </div>

          <div
            className={`${styles.history__contentwrapper} ${
              styles.history__fadeWrapper
            } ${fade ? styles['history__fadeWrapper--visible'] : ''}`}
          >
            <MainText text={content[activeTab].subtitle} />
            <div className={styles.history__textblock}>
              <p>{content[activeTab].textTop}</p>
              <p>{content[activeTab].textMiddle}</p>
              <p>{content[activeTab].textBottom}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
