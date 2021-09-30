import React from 'react';
import styles from './fieldset.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox/checkbox';
import PriceInput from '../price-input/price-input';

const Labels = {
  PRICE: 'Цена',
  TYPE: 'Тип гитар',
  STRINGS: 'Количество струн',
};

const Inputs = {
  [Labels.PRICE]: ['1 000', '30 000'],
  [Labels.TYPE]: ['Акустические гитары', 'Электрогитары', 'Укулеле'],
  [Labels.STRINGS]: ['4', '6', '7', '12'],
};

function Fieldset({label}) {
  const list = cn('', {[styles.price_list]: label === Labels.PRICE});
  const item = cn(
    {[styles.price_item]: label === Labels.PRICE},
    {[styles.item]: label === Labels.STRINGS || label === Labels.TYPE},
  );

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{label}</legend>
      <ul className={list}>
        {
          Inputs[label].map((input) => (
            <li key={input} className={item}>
              {
                label === Labels.PRICE ? <PriceInput label={input}/> : <Checkbox label={input}/>
              }
            </li>
          ))
        }
      </ul>
    </fieldset>
  );
}

Fieldset.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Fieldset;
