import styles from './header.module.scss';
import Socials from '../Base/Socials/Socials';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { links } from '@/app/utils/data';

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.header__container}>
        <BurgerMenu links={links} />
        <Socials />
      </div>
    </header>
  );
}
