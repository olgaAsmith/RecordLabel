import Image from 'next/image';
import styles from './photoline.module.scss';

export default function History() {
  return (
    <section className={styles.photoline}>
      <Image width={1440} height={240} src='/images/line.webp' alt='Photo' className={styles.photoline__image}/>
    </section>
  );
}
