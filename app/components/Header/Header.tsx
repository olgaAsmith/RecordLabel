import styles from './header.module.scss';
import Socials from '../Base/Socials/Socials';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header() {
  const links = ['Wave', 'Story', 'Contact'];
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.header__container}>
        <BurgerMenu links={links} />
        <Socials />
      </div>
    </header>
  );
}
