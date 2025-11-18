import Socials from '../Base/Socials/Socials';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <Socials />
      <span>&copy; all rights reserved</span>
    </footer>
  );
}
