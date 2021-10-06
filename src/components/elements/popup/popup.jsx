import React from 'react';
import styles from './popup.module.scss';
import {makePriceString} from '../../../const';
import PropTypes from 'prop-types';
import {selectActiveArticle} from '../../../store/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {addToBasket} from '../../../store/actions';

function Popup({setModalOpen}) {
  const article = useSelector(selectActiveArticle);
  const dispatch = useDispatch();
  const {name, price, img, type, strings} = article;

  const handleBuyClick = () => {
    setModalOpen(false);
    dispatch(addToBasket(article));
  };

  return (
    <section className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.title}>Добавить товар в корзину</h2>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <img
              src={img}
              width="56"
              height="128"
              alt="Гитара"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.number}>Артикул: SO757575</p>
            <p className={styles.description}>
              <span>{type}</span>
              ,
              <span>{strings} струнная</span>
            </p>
            <p className={styles.price}>Цена: {makePriceString(price)} ₽</p>
          </div>
          <button className={styles.button} onClick={handleBuyClick}>Добавить в корзину</button>
        </div>
      </div>
    </section>
  );
}

Popup.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default Popup;
