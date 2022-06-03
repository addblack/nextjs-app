import  { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 's' | 'l';
  color?: 'red' | 'grey' | 'green' | 'transparent' | 'primary';
  link?: string
}