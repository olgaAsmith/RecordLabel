import Button from '../Base/Button/Button';
import Equa from './Equa/Equa';
import styles from './hero.module.scss';

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.hero__main}>
        <h1>Record Label</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <Button text='Learn more'></Button>
      </div>
      <div className={styles.hero__image}>
        <Equa></Equa>
      </div>
    </section>
  );
}
