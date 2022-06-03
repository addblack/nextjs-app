import { FooterProps } from './FooterProps';
import styles from './Footer.module.css'
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props } : FooterProps) : JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
    <div>
    TOpTop © 2020 - {format(new Date, 'yyyy')} Все права защищены
    </div>
    <a href="/test" target='_blank'>POlzovatel soglasheni</a>
    <a href="/test" target='_blank'>Privacy Police</a>
  <div></div>
    </footer>
  );
};