import React from 'react';
import styles from './sorting.module.scss';
import cn from 'classnames';
import {SortOptions} from '../../../const';
import {useDispatch} from 'react-redux';
import {changeSort, changeDirection} from '../../../store/actions';

function Sorting() {
  const dispatch = useDispatch();

  const exchangeSort = (sortType) => {
    dispatch(changeSort(sortType));
    dispatch(changeDirection(''));
  };

  const exchangeDirection = (sortDirection) => dispatch(changeDirection(sortDirection));

  return (
    <section className={styles.sorting}>
      <h2 className='visually-hidden'>Сортировка</h2>
      <p className={styles.title}>Сортировать:</p>
      <ul className={styles.list}>
        {
          Object.entries(SortOptions).map(([name, option]) => (
            <li key={name} className={styles.item} onClick={() => exchangeSort(name.toLowerCase())}>
              {option}
            </li>
          ))
        }
      </ul>
      <ul className={styles.additional_list}>
        <li className={styles.addition_item} onClick={() => exchangeDirection('вверх')}>
        </li>
        <li className={cn(styles.addition_item, styles.addition_item__reverse)}
          onClick={() => exchangeDirection('вниз')}
        >
        </li>
      </ul>
    </section>
  );
}

export default Sorting;
