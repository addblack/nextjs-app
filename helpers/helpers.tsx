import CourseIcon from './icons/hat.svg';
import ServiceIcon from './icons/cloud.svg';
import BookIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import { TopLevelCategory } from './../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Courses', icon: <CourseIcon />, id: TopLevelCategory.Courses},
  { route: 'services', name: 'Services', icon: <ServiceIcon />, id: TopLevelCategory.Services},
  { route: 'books', name: 'Books', icon: <BookIcon />, id: TopLevelCategory.Books},
  { route: 'products', name: 'Products', icon: <ProductIcon />, id: TopLevelCategory.Products},
];

export const priceR = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');

export const devlOfNim = (number: number) : string => {
  if(number === 1) {
    return 'review';
  } else {
    return 'reviews';
  }
};