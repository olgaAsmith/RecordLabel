'use client';
import { useState } from 'react';
import MainText from '../Base/MainText/MainText';
import styles from './history.module.scss';
import Image from 'next/image';

interface ContentItem {
  title: string;
  subtitle: string;
  textTop: string;
  textMiddle: string;
  textBottom: string;
  imageUrl: string;
}

export default function ClientHistory({ content }: { content: ContentItem[] }) {
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

  return (
    <>
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
    </>
  );
}

