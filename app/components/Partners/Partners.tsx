import styles from './partners.module.scss';
import Image from 'next/image';

export default function Partners() {
  const logos = [
    {
      pic: '/images/logo/logo1.svg',
    },
    {
      pic: '/images/logo/logo2.svg',
    },
  ];
  return (
    <section className={`container`}>
      <h2>Our partners</h2>
      <ul className={styles.partners__list}>
        {logos.map((logo) => (
          <li key={logo.pic} className={styles.partners__item}>
            <Image
              width={250}
              height={100}
              src={logo.pic}
              alt='Story'
              className={styles.partners__image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
