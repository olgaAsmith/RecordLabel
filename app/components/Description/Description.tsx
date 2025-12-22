'use client';
import Button from '../Base/Button/Button';
import MainText from '../Base/MainText/MainText';
import Image from 'next/image';
import styles from './description.module.scss';
import { gsap } from '@/app/lib/gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Description() {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const textOverlay = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: 'top 10%',
        end: '+=250vh',
        scrub: 2,
        pin: true,
      },
    });
    tl.fromTo(
      titlesRef.current,
      { y: 200, x: 100, scale: 1.5 },
      { y: 0, x: 0, scale: 1, duration: 2 }
    );
    tl.to(textOverlay.current, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 5,
    });
    tl.fromTo(imageRef.current, { scale: 0 }, { scale: 1, duration: 5 }, '<');

    return () => {
      tl.revert();
    };
  }, []);

  return (
    <section
      ref={descriptionRef}
      className={`container ${styles.description}`}
      id='wave'
    >
      <div className={styles.description__container}>
        <div className={styles.description__left}>
          <div ref={titlesRef}>
            <h2>wave NFT</h2>
            <span>COLLECTION</span>
          </div>
          <Image
            ref={imageRef}
            width={360}
            height={360}
            src='/images/wave/blue_wave.webp'
            alt='Wave'
            className={styles.description__image}
          />
        </div>
        <div className={styles.description__right}>
          <MainText text='WAVE NFT is your pass to Record Label ecosystem. It is your access to our industry experts, established artists, and partners.' />
          <div ref={textOverlay} className={styles.description__overlay}></div>
          <div className={styles.description__textblock}>
            <p>
              Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet
              dictum sit amet justo. Tortor aliquam nulla facilisi cras.
            </p>
            <p>
              Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur
              adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed
              felis. Aenean vel elit scelerisque mauris pellentesque pulvinar.
              Et malesuada fames ac turpis egestas sed tempus. Enim sit amet
              venenatis urna cursus eget.
            </p>
            <p>
              Maecenas ultricies mi eget mauris pharetra et ultrices. A
              condimentum vitae sapien pellentesque habitant morbi.
            </p>
          </div>
          <Button text='Get one on OpenSea'></Button>
        </div>
      </div>
    </section>
  );
}
