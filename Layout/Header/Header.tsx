import { HeaderProps } from './HeaderProps';
import styles from './Layout.module.css'
import cn from 'classnames';

export const Header = ({ ...props } : HeaderProps) : JSX.Element => {
  return (
    <div {...props}>
    Header
    </div>
  );
};