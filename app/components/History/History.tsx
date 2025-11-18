'use client';
import MainText from '../Base/MainText/MainText';
import styles from './history.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function History() {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);

  const handleTabClick = (idx: number) => {
    if (idx === activeTab) return;

    setFade(false);
    setTimeout(() => {
      setActiveTab(idx);
      setFade(true);
    }, 300);
  };

  const content = [
    {
      title: 'Our founders',
      subtitle:
        'Record Label was founded by Shaky Lake and Baky Hike in 2020 business accelerator.',
      textTop:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      textMiddle:
        ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textBottom:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/images/story.webp',
    },
    {
      title: 'Partners',
      subtitle: 'Record Label partners',
      textTop:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      textMiddle:
        ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textBottom:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/images/story.webp',
    },
    {
      title: 'The future',
      subtitle: 'Record Label future',
      textTop:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      textMiddle:
        ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      textBottom:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/images/story.webp',
    },
  ];

  return (
    <section className={`container ${styles.history}`}>
      <h2>The Story</h2>
      <div className={styles.history__container}>
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
        <div>
          <div className={styles.history__content}>
            <div
              className={`${styles.history__imagewrapper} ${styles.history__fadeWrapper} ${
                fade ? styles['history__fadeWrapper--visible'] : ''
              }`}
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
              className={`${styles.history__contentwrapper} ${styles.history__fadeWrapper} ${
                fade ? styles['history__fadeWrapper--visible'] : ''
              }`}
            >
              <MainText text={content[activeTab].subtitle}></MainText>
              <div className={styles.history__textblock}>
                <p>{content[activeTab].textTop}</p>
                <p>{content[activeTab].textMiddle}</p>
                <p>{content[activeTab].textBottom}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
