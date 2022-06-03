import { TagProps } from './TagProps';

import styles from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({ children, size = 's', color = 'primary', link, key } : TagProps) : JSX.Element => {
  return (
    <div key={key} className={cn(styles.tag, {
      [styles.s]: size === 's',
      [styles.l]: size === 'l',
      [styles.red]: color === 'red',
      [styles.grey]: color === 'grey',
      [styles.green]: color === 'green',
      [styles.transparent]: color === 'transparent',
      [styles.primary]: color === 'primary',
      [styles.link]: link != undefined
    })}>
      {link ?
      <a href={link}>{children}</a> :
      <span>{children}</span>
    }
    </div>
  );
};