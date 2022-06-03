import { ParagraphProps } from './ParagraphProps';

import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ children, size = 'medium' } : ParagraphProps) : JSX.Element => {
  return (
    <p className={cn(styles.text, {
      [styles.small]: size === 'small',
      [styles.big]: size === 'big',
    })}>
      {children}
    </p>
  );
};