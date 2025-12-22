import styles from './button.module.scss';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { text, ...rest },
  ref
) {
  return (
    <button ref={ref} className={styles.button} {...rest}>
      {text}
    </button>
  );
});

export default Button;
