import Button from '../Base/Button/Button';
import styles from './join.module.scss';
import Image from 'next/image';

export default function Join() {
  return (
    <section className={`container ${styles.join}`} id='contact'>
      <div className={styles.join__container}>
        <div className={styles.join__info}>
          <h2>Join us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className={styles.join__button}>
            <Button text='Join us'></Button>
          </div>
        </div>
        <div className={styles.join__pic}>
          <Image
            width={580}
            height={580}
            src='/images/wave/pink_wave.webp'
            alt='Wave'
            className={styles.join__image}
          />
        </div>
      </div>
    </section>
  );
}
