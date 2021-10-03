import React from 'react';
import styles from './sorting.module.scss';
import cn from 'classnames';

const SortingTypes = {
  'Popular': (a, b) => a - b,
  'Price: low to high': (a, b) => a.price - b.price,
  'Price: high to low': (a, b) => b.price - a.price,
  'Top rated first': (a, b) => b.rating - a.rating,
};

const sortOptions = {
  PRICE: 'по цене',
  POPULAR: 'по популярности',
};

function Sorting() {
  return (
    <section className={styles.sorting}>
      <h2 className="visually-hidden">Сортировка</h2>
      <p className={styles.title}>Сортировать:</p>
      <ul className={styles.list}>
        {
          Object.entries(sortOptions).map(([name, option]) => (
            <li key={name} className={styles.item}>{option}</li>
          ))
        }
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
