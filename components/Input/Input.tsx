import { InputProps } from './InputProps';

import styles from './Input.module.css'
import cn from 'classnames';

export const Input = ({className,  ...props } : InputProps) : JSX.Element => {
  return (
    <input className={cn(className, styles.Input)} {...props} />
  );
};