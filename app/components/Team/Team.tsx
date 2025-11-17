import Socials from '../Base/Socials/Socials';
import styles from './team.module.scss';
import Image from 'next/image';

export default function Team() {
  const team = [
    {
      name: 'Shaky Lake',
      pic: '/images/team/team_shaky.webp',
      position: 'Founder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      twitterLink: 'url',
      linkedLink: 'url',
    },
    {
      name: 'Baky Hike',
      pic: '/images/team/team_baky.webp',
      position: 'Co-founder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      twitterLink: 'url',
      linkedLink: 'url',
    },
    {
      name: 'Vania Do',
      pic: '/images/team/team_vania.webp',
      position: 'Producer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      twitterLink: 'url',
      linkedLink: 'url',
    },
  ];

  return (
    <section className={styles.team}>
      <h2 className={styles.team__title}>
        {Array(5)
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
            <Socials />
            <p className={styles.team__description}>{artist.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
