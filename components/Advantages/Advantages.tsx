import { AdvantagesProps } from './AdvantagesProps';

import styles from './Advantages.module.css';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import CheckIcon from './check.svg';

export const Advantages = ( {advantages} ) : JSX.Element => {
  return (
      <>
        {advantages.map(a => (
          <div key={a._id} className={styles.advantage}>
            <CheckIcon />
            <div className={styles.title}>{a.title}</div>
              <div></div>
            <div className={styles.desc}>{a.description}</div>
          </div>
        ))}
      </>
  );
};