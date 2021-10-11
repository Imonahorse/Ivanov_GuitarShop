import React, {useEffect, useState} from 'react';
import styles from './order.module.scss';
import cn from 'classnames';
import {selectTotalPrice} from '../../../store/selectors';
import {useSelector} from 'react-redux';

const GITARAHIT = 'GITARAHIT';
const SUPERGITARA = 'SUPERGITARA';
const GITARA2020 = 'GITARA2020';


function Order() {
  const totalPrice = useSelector(selectTotalPrice);
  const [price, setPrice] = useState(totalPrice);
  const [promocode, setPromocode] = useState('');

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);

  const handleInputChange = (e) => {
    const {value} = e.target;
    setPromocode(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    switch (promocode) {
      case GITARAHIT:
        setPrice(totalPrice - (totalPrice * 10 / 100));
        break;
      case SUPERGITARA:
        setPrice(totalPrice - 700);
        break;
      case GITARA2020:
        setPrice(totalPrice - 3000);
        break;
      default:
        setPrice(totalPrice);
    }
  };

  return (
    <section className={styles.order}>
      <h2 className='visually-hidden'>Оформить покупку</h2>
      <div>
        <b className={styles.title}>Промокод по коду</b>
        <p className={styles.description}>Введите свой промокод если он у вас есть</p>
        <form method='post' onSubmit={handleFormSubmit}>
          <input className={styles.input} type='text' value={promocode} onChange={handleInputChange}/>
          <button type='submit' className={styles.button}>Применить купон</button>
        </form>
      </div>
      <div className={styles.right}>
        <p className={styles.price}>Всего: {price} ₽ </p>
        <button className={cn(styles.button, styles.button__orange)} type='button'>Оформить заказ</button>
      </div>
    </section>
  );
}

export default Order;
