import { ProductProps } from './ProductProps';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceR } from '../../helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';

import { Divider } from '../Divider/Divider';

import {devlOfNim} from '../../helpers/helpers';

export const Product =({ product, className, ...props }: ProductProps): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

	const variants = {
		visible: { opacity: 1, height: 'auto' },
		hidden: { opacity: 0, height: 0 }
	};



	return (
		<div className={className} {...props} >
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					<span><span className="visualyHidden">цена</span>{priceR(product.price)}</span>
					{product.oldPrice && <Tag className={styles.oldPrice} color="green">
						<span className="visualyHidden">discount</span>
						{priceR(product.price - product.oldPrice)}
					</Tag>
          }
				</div>
				<div className={styles.credit}>
					<span className="visualyHidden">credit</span>
					{priceR(product.credit)}/<span className={styles.month}>month</span>
				</div>
				<div className={styles.rating}>
					<span className="visualyHidden">{'rating' + (product.reviewAvg ?? product.initialRating)}</span>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles.tags}>
          {product.categories.map(c => <Tag key={c} className={styles.category} color='transparent'>{c}</Tag>)}
          </div>
				<div className={styles.priceTitle} aria-hidden={true}>price</div>
				<div className={styles.creditTitle} aria-hidden={true}>credit</div>
				<div className={styles.rateTitle}><a href="#ref">{product.reviewCount} {devlOfNim(product.reviewCount)}</a></div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						{/* <div>{product?.disadvantages}</div> */}
					</div>}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance='primary'>Узнать подробнее</Button>
					<Button
						appearance='secondary'
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
						aria-expanded={isReviewOpened}
					>Читать отзывы</Button>
				</div>
			</Card>
				<Card color='blue' className={styles.reviews} tabIndex={isReviewOpened ? 0 : -1}>
					{product.reviews.map(r => (
						<div key={r._id}>
              {/* {devlOfNim(1)} */}
						</div>
					))}
				</Card>
		</div>
	);
};