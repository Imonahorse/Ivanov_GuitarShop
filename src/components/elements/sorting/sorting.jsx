import React from 'react';
import styles from './sorting.module.scss';
import cn from 'classnames';

function Sorting() {
  return (
    <section className={styles.sorting}>
      <h2 className='visually-hidden'>Сортировка</h2>
      <p className={styles.title}>Сортировать:</p>
      <ul className={styles.list}>
        <li className={styles.item}>по цене</li>
        <li className={styles.item}>по популярности</li>
      </ul>
      <ul className={styles.additional_list}>
        <li className={styles.addition_item}>
        </li>
        <li className={cn(styles.addition_item, styles.addition_item__reverse)}>
        </li>
      </ul>
    </section>
  );
}

export default Sorting;
