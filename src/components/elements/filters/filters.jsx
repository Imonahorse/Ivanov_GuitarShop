import React from 'react';
import styles from './filters.module.scss';
import Fieldset from '../fieldset/fieldset';

const Labels = {
  PRICE: 'Цена, ₽',
  TYPE: 'Тип гитар',
  STRINGS: 'Количество струн',
};

function Filters() {
  return (
    <section className={styles.filter}>
      <h2 className={styles.title}>Фильтр</h2>
      <form action='' method='post'>
        <Fieldset label={Labels.PRICE} />
        <Fieldset label={Labels.TYPE} />
        <Fieldset label={Labels.STRINGS} />
        <button className={styles.submit} type='submit'>Показать</button>
      </form>
    </section>
  );
}

export default Filters;
