import React from 'react';
import styles from './popup.module.scss';
import {makePriceString} from '../../../const';

function Popup() {
  return (
    <section className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.title}>Добавить товар в корзину</h2>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <img
              src="/"
              width="56"
              height="128"
              alt="Гитара"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>ЭлектроГитара Хуе Мое</h3>
            <p className={styles.number}>Артикул: SO757575</p>
            <p className={styles.description}>
              <span>Электрогитара</span>
              ,
              <span>6 струнная</span>
            </p>
            <p className={styles.price}>Цена: {makePriceString(17000)} ₽</p>
          </div>
          <button className={styles.button}>Добавить в корзину</button>
        </div>
      </div>
    </section>
  );
}

export default Popup;
