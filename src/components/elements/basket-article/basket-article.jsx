import React from 'react';
import styles from './basket-article.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {makePriceString} from '../../../const';

function BasketArticle({info}) {
  const {name, price, img} = info;

  return (
    <article className={styles.article}>
      <button className={styles.close} type="button"/>
      <div className={styles.img}>
        <img
          src={img}
          width="48"
          height="124"
          alt="Гитара"
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h3 className={styles.title}>ЭлектроГитара {name}</h3>
          <p className={styles.number}>Артикул: SO757575</p>
          <p className={styles.description}>
            <span>Электрогитара</span>
            ,
            <span>6 струнная</span>
          </p>
        </div>
        <p className={styles.price}>{makePriceString(price)} ₽</p>
        <div className={styles.control}>
          <button
            className={cn(styles.button, styles.button_minus)}
            type="button"
          />
          <p className={styles.count}>1</p>
          <button
            className={cn(styles.button, styles.button_plus)}
            type="button"
          />
        </div>
        <p className={styles.total}>17 500 ₽</p>
      </div>
    </article>
  );
}

BasketArticle.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default BasketArticle;
