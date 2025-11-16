import styles from './maintext.module.scss';

type ButtonProps = {
  text: string;
};

export default function MainText({ text }: ButtonProps) {
  return (
    <div className={styles['main-text']}>
      <p>{text}</p>
    </div>
  );
}
