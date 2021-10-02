import React from 'react';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import styles from './article.module.scss';
import PropTypes from 'prop-types';
import Button from '../button/button';
import {makePriceString} from '../../../const';

const YELLOW = '#FFD168';

function Article({info}) {
  const {name, price, rating, vote, img} = info;

  return (
    <article className={styles.article}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          width='68'
          height='190'
          src={img}
          alt='Изображение товара'
        />
      </div>
      <div className={styles.description}>
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{makePriceString(price)} ₽</p>
        </div>
        <div className={styles.rating}>
          <ReactStars
            classNames={styles.stars}
            count={5}
            size={15}
            isHalf
            edit={false}
            activeColor={YELLOW}
            value={rating}
          />
          <p className={styles.count}>{vote}</p>
        </div>
        <div className={styles.controls}>
          <Button small gray href='/'>Подробнее</Button>
          <Button small orange type='button'>Купить</Button>
        </div>
      </div>
    </article>
  );
}

Article.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
