import styles from './socials.module.scss';
import Image from 'next/image';

export type SocialItem = {
  name: string;
  href: string;
  icon: string;
};

type SocialsProps = {
  customSocials?: SocialItem[];
};

const defaultSocials: SocialItem[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '/icons/socials/twitter.svg',
  },
  {
    name: 'Discord',
    href: 'https://discord.com',
    icon: '/icons/socials/discord.svg',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: '/icons/socials/youtube.svg',
  },
  {
    name: 'Telegram',
    href: 'https://t.me',
    icon: '/icons/socials/tg.svg',
  },
];

export default function Socials({ customSocials }: SocialsProps) {
  const socials = customSocials || defaultSocials;

  return (
    <div>
      <ul className={styles.socials}>
        {socials.map(({ name, href, icon }) => (
          <li key={name} className={styles.socials__item}>
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socials__link}
            >
              <Image
                width={25}
                height={20}
                src={icon}
                alt={name}
                className={styles.socials__icon}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
