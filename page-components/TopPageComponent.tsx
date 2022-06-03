import { TopPageComponentProps } from './TopPageComponent.props';
import { Advantages, Card, Heading, Paragraph, Product, Sort, Tag, Vacancy } from '../components';

import styles from './TopPageComponent.module.css'
import cn from 'classnames';
import { TopLevelCategory } from '../interfaces/page.interface';
import { SortEnum } from '../components/Sort/SortProps';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';


export const TopPageComponent = ({ page, products, firstCategory } : TopPageComponentProps) : JSX.Element => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading tag='h1'>test</Heading>
        <Tag color='grey' size='l'>{products && products.length}</Tag>
        <Sort sort={sort} setSort={setSort}/>
      </div>

      <div>
        {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p}>{p.title}</Product>))}
      </div>

      <div className={styles.hhTitle}>
        <Heading tag='h2'>Vacancies - {page.category}</Heading>
        <Tag color='red' size='l'>HH</Tag>
      </div>

      <div className={styles.vacancies}>
        {firstCategory === TopLevelCategory.Courses && page.hh && <Vacancy {...page.hh} />}
      </div>

      <div className={styles.advantages}>
        {page.advantages && page.advantages.length > 0 && <>
          <Heading tag="h2">Advantages</Heading>
          <Advantages advantages={page.advantages} />
        </>}
      </div>

          {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}

          <Heading tag="h2">Skills</Heading>

          {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}


    </div>
  );
};