import { SidebarProps } from './SidebarProps';
import styles from './Layout.module.css'
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import {Search} from '../../components';

export const Sidebar = ({ ...props } : SidebarProps) : JSX.Element => {
  return (
    <div {...props}>
      <Search />
      <Menu />
    </div>
  );
};