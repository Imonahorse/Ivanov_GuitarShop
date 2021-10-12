import React from 'react';
import styles from './sorting.module.scss';
import cn from 'classnames';
import {SortOptions} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {changeSort, changeDirection} from '../../../store/actions';
import {selectActiveSort, selectDirection} from '../../../store/selectors';

function Sorting() {
  const activeType = useSelector(selectActiveSort);
  const activeDirection = useSelector(selectDirection);
  const dispatch = useDispatch();

  const exchangeSort = (sortType) => {
    dispatch(changeSort(sortType));
  };

  const handleKeyDownSortClick = (sortType, e) => {
    if (e.key === 'Enter') {
      exchangeSort(sortType);
    }
  };

  const handleKeyDownDirectionClick = (direction, e) => {
    if (e.key === 'Enter') {
      dispatch(changeDirection(direction));
    }
  };

  const exchangeDirection = (sortDirection) => dispatch(changeDirection(sortDirection));

  return (
    <section className={styles.sorting}>
      <h2 className='visually-hidden'>Сортировка</h2>
      <p className={styles.title}>Сортировать:</p>
      <ul className={styles.list}>
        {
          Object.entries(SortOptions).map(([name, option]) => (
            <li
              key={name}
              className={cn(styles.item, {[styles.item__active]: activeType === name.toLowerCase()})}
              onClick={() => exchangeSort(name.toLowerCase())}
              onKeyDown={(e) => handleKeyDownSortClick(name.toLowerCase(), e)}
              tabIndex='0'
            >
              {option}
            </li>
          ))
        }
      </ul>
      <ul className={styles.additional_list}>
        <li className={cn(styles.addition_item, {[styles.addition_item__active]: activeDirection === 'вверх'})}
          onClick={() => exchangeDirection('вверх')}
          onKeyDown={(e) => handleKeyDownDirectionClick('вверх', e)}
          tabIndex='0'
        >
        </li>
        <li
          className={cn(
            styles.addition_item,
            styles.addition_item__reverse,
            {[styles.addition_item__active]: activeDirection === 'вниз'})}
          onClick={() => exchangeDirection('вниз')}
          onKeyDown={(e) => handleKeyDownDirectionClick('вниз', e)}
          tabIndex='0'
        >
        </li>
      </ul>
    </section>
  );
}

export default Sorting;
