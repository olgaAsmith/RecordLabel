'use client';

import styles from './history.module.scss';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import MainText from '../Base/MainText/MainText';
import { content } from '@/app/utils/data';

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  const storyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storytellRef = useRef<HTMLDivElement>(null);
  const tabTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleTabClick = (index: number) => {
    if (!isMobile || index === activeTab) return;

    setFade(false);

    gsap.delayedCall(0.25, () => {
      setActiveTab(index);
      setFade(true);
    });
  };

  useEffect(() => {
    if (!storyRef.current) return;

    const mm = gsap.matchMedia();
    let tabTrigger: ScrollTrigger | null = null;

    // ===== DESKTOP ONLY =====
    mm.add('(min-width: 1025px)', () => {
      setIsMobile(false);
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 10%',
          end: 'top top',
          scrub: 1,
        },
      });

      introTl
        .fromTo(titleRef.current, { y: 200, scale: 1.5 }, { y: 0, scale: 1 })
        .fromTo(
          storytellRef.current,
          { opacity: 0, y: 350 },
          { opacity: 1, y: 0 },
          '<'
        );

      const tabCount = content.length;
      let currentIndex = 0;

      tabTrigger = ScrollTrigger.create({
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
        introTl.scrollTrigger?.kill();
        introTl.kill();
        tabTrigger?.kill();
      };
    });

    mm.add('(max-width: 1024px)', () => {
      setIsMobile(true);
      setActiveTab(0);
      setFade(true);

      gsap.set([titleRef.current, storytellRef.current], { clearProps: 'all' });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={storyRef}
      className={`container ${styles.history}`}
      id='story'
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
                role={isMobile ? 'button' : undefined}
                tabIndex={isMobile ? 0 : -1}
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
              alt='Story'
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
