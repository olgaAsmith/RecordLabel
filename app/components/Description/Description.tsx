import Button from '../Base/Button/Button';
import MainText from '../Base/MainText/MainText';
import Image from 'next/image';
import styles from './description.module.scss';

export default function Description() {
  return (
    <section className={`container ${styles.description}`}>
      <div className={styles.description__container}>
        <div className={styles.description__mini_container}>
          <h2>wave NFT</h2>
          <span>COLLECTION</span>
          <Image
            width={360}
            height={360}
            src='/images/wave/blue_wave.webp'
            alt='Wave'
            className={styles.description__image}
          />
        </div>
        <div className={styles.description__minicontainer}>
          <MainText text='WAVE NFT is your pass to Record Label ecosystem. It is your access to our industry experts, established artists, and partners.' />
          <div className={styles.description__textblock}>
            <p>
              Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet
              dictum sit amet justo. Tortor aliquam nulla facilisi cras.
            </p>
            <p>
              Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur
              adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed
              felis. Aenean vel elit scelerisque mauris pellentesque pulvinar.
              Et malesuada fames ac turpis egestas sed tempus. Enim sit amet
              venenatis urna cursus eget.
            </p>
            <p>
              Maecenas ultricies mi eget mauris pharetra et ultrices. A
              condimentum vitae sapien pellentesque habitant morbi.
            </p>
          </div>
          <Button text='Get one on OpenSea'></Button>
        </div>
      </div>
    </section>
  );
}
