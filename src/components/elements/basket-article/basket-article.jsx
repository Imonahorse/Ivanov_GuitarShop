import React, {useEffect, useState} from 'react';
import styles from './basket-article.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {makePriceString} from '../../../const';
import {useDispatch} from 'react-redux';
import {changeGuitarCount, deleteFromBasket} from '../../../store/actions';

const BasketImage = {
  WIDTH: '48',
  HEIGHT: '124',
};

const PopupImage = {
  WIDTH: '56',
  HEIGHT: '128',
};

function BasketArticle({info, popup = false, handleAddToBasketClick, handleCloseModalClick}) {
  const {id, name, price, img, type, strings, article} = info;
  const [guitarCount, setGuitarCount] = useState(1);
  const dispatch = useDispatch();
  const isBasket = !popup;
  const imageWidth = (isBasket && BasketImage) || (popup && PopupImage);

  useEffect(() => {
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  }, [guitarCount]);

  const handleGuitarCountMinus = () => {
    setGuitarCount((prev) => prev === 1 ? 1 : prev - 1);
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  };

  const handleGuitarCountPlus = () => {
    setGuitarCount((prev) => prev === 10 ? 10 : prev + 1);
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  };

  const priceElement = (
    <p className={cn(styles.price, {[styles.price__popup]: popup})}>
      {popup && 'Цена:'} {makePriceString(price)} ₽
    </p>
  );

  const guitarCountModifyElement = (
    <>
      <div className={styles.control}>
        <button
          className={cn(styles.button, styles.button_minus)}
          type='button'
          onClick={handleGuitarCountMinus}
        />
        <p className={styles.count}>{guitarCount}</p>
        <button
          className={cn(styles.button, styles.button_plus)}
          type='button'
          onClick={handleGuitarCountPlus}
        />
      </div>
      <p className={styles.total}>{guitarCount * price} ₽</p>
    </>
  );

  const addToBasketButtonElement = (
    <button className={styles.buy} onClick={handleAddToBasketClick}>
      Добавить в корзину
    </button>
  );

  const deleteArticleFromBasket = () => {
    dispatch(deleteFromBasket(info));
  };

  return (
    <article className={cn({[styles.article]: isBasket}, {[styles.wrapper]: popup})} id={id}>
      {
        isBasket &&
        <button
          className={styles.close}
          type='button'
          onClick={deleteArticleFromBasket}
        />
      }
      <div className={cn(styles.img, {[styles.img__popup]: popup})}>
        <img
          src={img}
          width={imageWidth.WIDTH}
          height={imageWidth.HEIGHT}
          alt='Гитара'
        />
      </div>
      <div className={cn(styles.inner, {[styles.inner__popup]: popup})}>
        <div className={cn(styles.info, {[styles.info__popup]: popup})}>
          <h3 className={styles.title}>
            {(isBasket && type) || (popup && 'Гитара')} {name}
          </h3>
          <p className={styles.number}>Артикул: {article}</p>
          <p className={cn(styles.description, {[styles.description__popup]: popup})}>
            {type}, {strings} струнная
          </p>
          {popup && priceElement}
        </div>
        {popup && addToBasketButtonElement}
        {isBasket && priceElement}
        {isBasket && guitarCountModifyElement}
      </div>
    </article>
  );
}

BasketArticle.propTypes = {
  handleCloseModalClick: PropTypes.func,
  handleAddToBasketClick: PropTypes.func,
  popup: PropTypes.bool,
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default BasketArticle;
