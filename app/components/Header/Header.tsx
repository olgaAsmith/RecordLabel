import styles from './header.module.scss';
import Socials from '../Base/Socials/Socials';

export default function Header() {
  const links = ['Wave N FTs', 'Stories', 'Contact'];
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.header__container}>
        <nav>
          <ul className={styles.menu}>
            {links.map((link, idx) => (
              <li className={styles.menu__item} key={idx}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <Socials />
      </div>
    </header>
  );
}
