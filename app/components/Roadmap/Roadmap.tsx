'use client';

import Circle from './Circle/Circle';
import styles from './roadmap.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useGsapTimeline } from '@/app/hooks/useGsapTimeline';

export default function Roadmap() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGsapTimeline(roadmapRef, (gsapInstance) => {
    const items = gsapInstance.utils.toArray<HTMLElement>(
      `.${styles.roadmap__item}`
    );

    if (titleRef.current) {
      gsapInstance.fromTo(
        titleRef.current,
        { y: 200, scale: 1.5 },
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

    items.forEach((item) => {
      gsapInstance.fromTo(
        item,
        { y: 150, rotateX: -90, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          transformPerspective: 1000,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 4,
          },
        }
      );
    });
  });

  const content = [
    {
      number: 1,
      title: 'Phase 1',
      subtitle: 'Spring - pre launch',
      features: [
        { text: 'Website 1.2' },
        { text: 'Discord community promotion' },
        { text: 'MINTING WAVE' },
      ],
      text: 'WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection',
      image: '/images/wave/mini_red.webp',
    },
    {
      number: 2,
      title: 'Phase 2',
      subtitle: 'Summer - GROWTH',
      features: [
        { text: 'Hiring for 10 positions in' },
        { text: 'Partnerships with main players' },
        { text: 'Partnerships with WEB 2.0 music destribution channels' },
      ],
      text: 'Record Labels is holding the first screening of aspiring artists from the list of WAVE NFT holders',
      image: '/images/wave/mini_blue.webp',
    },
    {
      number: 3,
      title: 'Phase 3',
      subtitle: 'Winter - new stage',
      features: [
        { text: 'Onboarding new partners' },
        { text: 'First live concert in Sandjar' },
        { text: 'Live concert in Decentrafield' },
      ],
      text: 'We secured dates for out artists to peform in front of the live. Check the concert schedule in our',
      image: '/images/wave/mini_pink.webp',
    },
  ];
  return (
    <section ref={roadmapRef} className={`container ${styles.roadmap}`}>
      <div className={styles.roadmap__pulse1}>
        <Circle />
      </div>
      <div className={styles.roadmap__pulse2}>
        <Circle />
      </div>
      <div className={styles.roadmap__pulse3}>
        <Circle />
      </div>
      <h2 ref={titleRef}>Roadmap</h2>
      <ul className={styles.roadmap__cards}>
        {content.map((item) => (
          <li key={item.number} className={styles.roadmap__item}>
            <div className={styles['roadmap__item-top']}>
              <span className={styles.roadmap__number}>{item.number}</span>
              <div>
                <h3 className={styles.roadmap__title}>{item.title}</h3>
                <h4 className={styles.roadmap__subtitle}>{item.subtitle}</h4>
              </div>
            </div>
            <div className={styles['roadmap__item-bottom']}>
              <div>
                <ul className={styles.roadmap__list}>
                  {item.features.map((feature) => (
                    <li key={feature.text} className={styles.roadmap__feature}>
                      <span className={styles.roadmap__arrow}>&#9658;</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.roadmap__text}>{item.text}</p>
              </div>
              <div className={styles.roadmap__pic}>
                <Image
                  width={100}
                  height={150}
                  src={item.image}
                  alt='Wave'
                  className={styles.roadmap__image}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
