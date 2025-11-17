import Pulse from './Pulse/Pulse';
import styles from './roadmap.module.scss';
import Image from 'next/image';

export default function Roadmap() {
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
      text: 'We secured dates for out artists to peform in front of the live audience of Metaverse. Check the concert schedule in our',
      image: '/images/wave/mini_pink.webp',
    },
  ];
  return (
    <section className={`container ${styles.roadmap}`}>
      <div className={styles.roadmap__pulse1}>
        <Pulse />
      </div>
      <div className={styles.roadmap__pulse2}>
        <Pulse />
      </div>
      <div className={styles.roadmap__pulse3}>
        <Pulse />
      </div>
      <h2>Roadmap</h2>
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
                <ul className={styles.roadmap}>
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
                  width={150}
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
