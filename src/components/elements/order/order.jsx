import React from 'react';
import styles from './order.module.scss';
import cn from 'classnames';

function Order() {
  return (
    <section className={styles.order}>
      <h2 className="visually-hidden">Оформить покупку</h2>
      <div>
        <b className={styles.title}>Промокод по коду</b>
        <p className={styles.description}>Введите свой промокод если он у вас есть</p>
        <form method="post">
          <input className={styles.input} type="text"/>
          <button type="button" className={styles.button}>Применить купон</button>
        </form>
      </div>
      <div className={styles.right}>
        <p className={styles.price}>Всего: 47 000 ₽ </p>
        <button className={cn(styles.button, styles.button__orange)} type='button'>Оформить заказ</button>
      </div>
    </section>
  );
}

export default Order;
