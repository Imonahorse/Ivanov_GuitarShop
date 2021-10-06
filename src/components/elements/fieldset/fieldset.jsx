import React, {useState} from 'react';
import styles from './fieldset.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox/checkbox';
import PriceInput from '../price-input/price-input';

const Labels = {
  PRICE: 'Цена, ₽',
  TYPE: 'Тип гитар',
  STRINGS: 'Количество струн',
};

// const Inputs = {
//   [Labels.PRICE]: ['1 000', '30 000'],
//   [Labels.TYPE]: ['Акустические гитары', 'Электрогитары', 'Укулеле'],
//   [Labels.STRINGS]: ['4', '6', '7', '12'],
// };

const initialState = {
  [Labels.PRICE]: [
    {id: 1, value: '', isValid: false, touched: false, placeholder: '1 000'},
    {id: 2, value: '', isValid: false, touched: false, placeholder: '30 000'},
  ],
  [Labels.STRINGS]: [
    {id: 1, value: '4', isChecked: false, disabled: false},
    {id: 2, value: '6', isChecked: false, disabled: false},
    {id: 3, value: '7', isChecked: false, disabled: false},
    {id: 4, value: '12', isChecked: false, disabled: false},
  ],
  [Labels.TYPE]: [
    {id: 1, value: 'Акустические гитары', isChecked: false, disabled: false},
    {id: 2, value: 'Электрогитары', isChecked: false, disabled: false},
    {id: 3, value: 'Укулеле', isChecked: false, disabled: false},
  ],
};

function Fieldset({label}) {
  const [strings, setStrings] = useState(initialState[Labels.STRINGS]);

  const list = cn('', {[styles.price_list]: label === Labels.PRICE});
  const item = cn(
    {[styles.price_item]: label === Labels.PRICE},
    {[styles.item]: label === Labels.STRINGS || label === Labels.TYPE},
  );

  const ggg = (e) => {
    const {checked, value} = e.target;
    const ass = strings.slice();
    ass.forEach((eee) => {
      if (eee.value === value) {
        eee.isChecked = checked;
      }
    });
    setStrings(ass);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{label}</legend>
      <ul className={list}>
        {
          strings.map(({id, value, isChecked, disabled}) => (
            <li key={id} className={item}>
              <Checkbox onChange={ggg} value={value} isChecked={isChecked} disabled={disabled}/>
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
