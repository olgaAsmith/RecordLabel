import styles from './artists.module.scss';
import Image from 'next/image';

export default function Artists() {
  const artists = [
    { name: 'Daniela Youth', pic: '/images/artists/daniela.webp' },
    { name: 'Roman Gore', pic: '/images/artists/roman.webp' },
    { name: 'Pete Bentz', pic: '/images/artists/pete.webp' },
    { name: 'Mark Popson', pic: '/images/artists/mark.webp' },
    { name: 'Tonya', pic: '/images/artists/tonya.webp' },
    { name: 'Ivor', pic: '/images/artists/ivor.webp' },
    { name: 'Somae Petit', pic: '/images/artists/somae.webp' },
  ];

  return (
    <section className={styles.artists}>
      <h2 className={styles.artists__title}>
        {Array(5)
          .fill('Artists')
          .map((text, index) => (
            <span key={index}>{text}</span>
          ))}
      </h2>

      <ul className={styles.artists__info}>
        {artists.map((artist, index) => (
          <li key={index} className={styles.artists__item}>
            <Image
              width={450}
              height={450}
              src={artist.pic}
              alt={artist.name}
              className={styles.artists__image}
            />
            <h3 className={styles.artists__name}>{artist.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
