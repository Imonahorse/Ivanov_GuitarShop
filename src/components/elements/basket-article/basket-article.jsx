import React, {useEffect, useState} from 'react';
import styles from './basket-article.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {makePriceString} from '../../../const';
import {useDispatch} from 'react-redux';
import {changeGuitarCount, deleteFromBasket} from '../../../store/actions';
import articleProps from './../article/article-props';
import Button from '../button/button';

const BasketImage = {
  WIDTH: '48',
  HEIGHT: '124',
};

const PopupImage = {
  WIDTH: '56',
  HEIGHT: '128',
};

const MAX_COUNT = 10;
const MIN_COUNT = 1;

function BasketArticle({info, popup, handleAddToBasketClick, handleCloseModalClick}) {
  const {id, name, price, img, type, strings, article} = info;
  const [guitarCount, setGuitarCount] = useState(MIN_COUNT);
  const dispatch = useDispatch();
  const isBasket = !popup;
  const imageWidth = (isBasket && BasketImage) || (popup && PopupImage);

  useEffect(() => {
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  }, [guitarCount, dispatch, id, price]);

  const handleGuitarCountMinus = () => {
    setGuitarCount((prev) => prev === MIN_COUNT ? MIN_COUNT : prev - MIN_COUNT);
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  };

  const handleGuitarCountPlus = () => {
    setGuitarCount((prev) => prev === MAX_COUNT ? MAX_COUNT : prev + MIN_COUNT);
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  };

  const priceElement = (
    <p className={cn(styles.price, {[styles.price__popup]: popup})}>
      {popup && 'Цена: '} {makePriceString(price)} ₽
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
      <p className={styles.total}>{makePriceString(guitarCount * price)} ₽</p>
    </>
  );

  const addToBasketButtonElement = (
    <Button orange className={styles.buy} onClick={handleAddToBasketClick}>
      Добавить в корзину
    </Button>
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
  info: articleProps,
};

BasketArticle.defaultProps = {
  popup: false,
  handleCloseModalClick: ()=>{},
  handleAddToBasketClick: ()=>{},
};

export default BasketArticle;
