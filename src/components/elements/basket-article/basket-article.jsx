import React, {useEffect, useState} from 'react';
import styles from './basket-article.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {AppRoutes, makePriceString} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {addActiveArticle, changeGuitarCount, deleteFromBasket, deleteFromTotal} from '../../../store/actions';
import articleProps from './../article/article-props';
import Button from '../button/button';
import Input from '../input/input';
import {selectTotal} from '../../../store/selectors';
import {useRouteMatch} from 'react-router-dom';
import Modal from '../modal/modal';

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
  const totalPrice = useSelector(selectTotal);
  const {path} = useRouteMatch();
  const {id, name, price, img, type, strings, article} = info;
  const activeId = totalPrice.find((item) => item.id === id);
  const [guitarCount, setGuitarCount] = useState(activeId ? activeId.count : MIN_COUNT);
  const [prevGuitarCount, setPrevGuitarCount] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isBasket = !popup;
  const imageWidth = (isBasket && BasketImage) || (popup && PopupImage);

  useEffect(() => {
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  }, [guitarCount, dispatch, id, price]);

  const handleGuitarCountMinus = () => {
    setGuitarCount((prev) => prev === MIN_COUNT ? MIN_COUNT : +prev - MIN_COUNT);
    dispatch(addActiveArticle(id));
    if (guitarCount === 1) {
      setModalOpen(true);
    }
  };

  const handleGuitarCountPlus = () => {
    setGuitarCount((prev) => prev === MAX_COUNT ? MAX_COUNT : +prev + MIN_COUNT);
  };

  const handleInputChange = (e) => {
    const {value} = e.target;
    const inputValue = +value.trim();

    if (isNaN(inputValue)) {
      return;
    }

    if (inputValue >= 1 || inputValue <= 10) {
      setGuitarCount(inputValue);
    }

    if (inputValue < 1) {
      setGuitarCount(1);
    }

    if (inputValue > 10) {
      setGuitarCount(10);
    }
  };

  const handleInputClick = () => {
    setPrevGuitarCount(guitarCount);
    setGuitarCount('');
  };

  const handleInputBlur = () => {
    if (!guitarCount) {
      setGuitarCount(prevGuitarCount);
      setPrevGuitarCount('');
    }
  };

  const deleteArticleFromBasket = () => {
    dispatch(deleteFromBasket(info));
    dispatch(deleteFromTotal(info));
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
        <Input
          className={styles.count}
          value={guitarCount}
          onChange={handleInputChange}
          type='text'
          onClick={handleInputClick}
          onBlur={handleInputBlur}
        >
        </Input>
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
    <div className={styles.button_inner}>
      <Button
        orange
        className={styles.buy}
        onClick={path === AppRoutes.BASKET ? deleteArticleFromBasket : handleAddToBasketClick}
      >
        {path === AppRoutes.BASKET ? 'Удалить товар?' : 'Добавить в корзину'}
      </Button>
      {
        popup && path === AppRoutes.BASKET &&
        <Button
          white
          to={AppRoutes.CATALOG}
          className={styles.buy}
          onClick={handleCloseModalClick}
        >
          Продолжить покупки
        </Button>
      }
    </div>
  );

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
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>}
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
  handleCloseModalClick: () => {
  },
  handleAddToBasketClick: () => {
  },
};

export default BasketArticle;
