import { VacancyProps } from './Vacancy.props';

import styles from './Vacancy.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';

import StarIcon from './star.svg';
import { priceR } from '../../helpers/helpers';

export const Vacancy = ({ count, juniorSalary, middleSalary, seniorSalary } : VacancyProps) : JSX.Element => {
  return (
    <div className={styles.vacancies}>
      <Card className={styles.count}>
        <div className={styles.title}>Total vacancies</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <div className={styles.salary}>
      <Card className={styles.count}>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{priceR(juniorSalary)}</div>
          <div className={styles.rating}>
            <StarIcon className={styles.filled}/>
            <StarIcon />
            <StarIcon />
            </div>
      </Card>

      <Card className={styles.count}>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{priceR(middleSalary)}</div>
          <div className={styles.rating}>
            <StarIcon className={styles.filled}/>
            <StarIcon />
            <StarIcon />
            </div>
      </Card>

      <Card className={styles.count}>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{priceR(seniorSalary)}</div>
          <div className={styles.rating}>
            <StarIcon className={styles.filled}/>
            <StarIcon className={styles.filled}/>
            <StarIcon className={styles.filled}/>
            </div>
      </Card>
      </div>

    </div>
  );
};