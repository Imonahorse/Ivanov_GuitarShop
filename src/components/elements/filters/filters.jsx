import React, {useState} from 'react';
import styles from './filters.module.scss';
import {useDispatch} from 'react-redux';
import {addPriceFrom, addPriceTo, addStringsCount, addTypes} from '../../../store/actions';
import cn from 'classnames';
// import PriceInput from '../price-input/price-input';
// import Checkbox from '../checkbox/checkbox';

// const Labels = {
//   PRICE: 'Цена, ₽',
//   TYPE: 'Тип гитар',
//   STRINGS: 'Количество струн',
// };
//
// const initialState = {
//   [Labels.PRICE]: [
//     {id: 1, value: '', isValid: false, touched: false, placeholder: '1 000'},
//     {id: 2, value: '', isValid: false, touched: false, placeholder: '30 000'},
//   ],
//   [Labels.STRINGS]: [
//     {id: 1, value: '4', isChecked: false, disabled: false},
//     {id: 2, value: '6', isChecked: false, disabled: false},
//     {id: 3, value: '7', isChecked: false, disabled: false},
//     {id: 4, value: '12', isChecked: false, disabled: false},
//   ],
//   [Labels.TYPE]: [
//     {id: 1, value: 'Акустические гитары', isChecked: false, disabled: false},
//     {id: 2, value: 'Электрогитары', isChecked: false, disabled: false},
//     {id: 3, value: 'Укулеле', isChecked: false, disabled: false},
//   ],
// };

const stringsState = [
  {id: 1, value: '4', isChecked: false, disabled: false},
  {id: 2, value: '6', isChecked: false, disabled: false},
  {id: 3, value: '7', isChecked: false, disabled: false},
  {id: 4, value: '12', isChecked: false, disabled: false},
];

const typesState = [
  {id: 1, value: 'Акустические гитары', isChecked: false, disabled: false},
  {id: 2, value: 'Электрогитары', isChecked: false, disabled: false},
  {id: 3, value: 'Укулеле', isChecked: false, disabled: false},
];


function Filters() {
  const [priceTo, setPriceTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [strings, setStrings] = useState(stringsState);
  const [types, setTypes] = useState(typesState);

  const dispatch = useDispatch();

  const handlePriceChange = (e) => {
    const {name, value} = e.target;
    if (isNaN(value) || value.length > '7') {
      return;
    }

    if (name === 'from') {
      setPriceFrom(value);
    }

    if (name === 'to') {
      setPriceTo(value);
    }
  };

  const handlePriceBlue = (e) => {
    const {name} = e.target;
    if (+priceFrom > +priceTo && name === 'from' && priceTo) {
      setPriceFrom(priceTo);
    }

    if (+priceTo < +priceFrom && name === 'to') {
      setPriceTo(priceFrom);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addPriceFrom(priceFrom));
    dispatch(addPriceTo(priceTo));
    const stringArray = [];
    strings.forEach((item) => {
      if (item.isChecked) {
        stringArray.push(item.value);
      }
    });
    const typesArray = [];
    types.forEach((item) => {
      if (item.isChecked) {
        typesArray.push(item.value);
      }
    });
    dispatch(addStringsCount(stringArray));
    dispatch(addTypes(typesArray));
  };

  const handleStringsChange = (e) => {
    const {checked, value} = e.target;
    const ass = strings.slice();
    ass.forEach((item) => {
      if (item.value === value) {
        item.isChecked = checked;
      }
    });
    setStrings(ass);
  };

  const handleTypesChange = (e) => {
    const {checked, value} = e.target;
    const ass = types.slice();
    ass.forEach((item) => {
      if (item.value === value) {
        item.isChecked = checked;
      }
    });
    setTypes(ass);
  };

  return (
    <section className={styles.filter}>
      <h2 className={styles.title}>Фильтр</h2>
      <form action="" method="post" onSubmit={submit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Цена, ₽</legend>
          <ul className={styles.price_list}>
            <li className={styles.price_item}>
              <input
                className={styles.price_input}
                onChange={handlePriceChange}
                name="from"
                value={priceFrom}
                type="text"
                placeholder={'1 000'}
                onBlur={handlePriceBlue}
              />
            </li>
            <li className={styles.price_item}>
              <input
                onChange={handlePriceChange}
                className={styles.price_input}
                name="to"
                value={priceTo}
                type="text"
                placeholder={'30 000'}
                onBlur={handlePriceBlue}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Количество струн</legend>
          <ul>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="string"
                  value={4}
                  onChange={handleStringsChange}
                />
                <span className={styles.span}>4</span>
              </label>
            </li>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="string"
                  value={6}
                  onChange={handleStringsChange}
                />
                <span className={styles.span}>6</span>
              </label>
            </li>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="string"
                  value={7}
                  onChange={handleStringsChange}
                />
                <span className={styles.span}>7</span>
              </label>
            </li>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="string"
                  value={12}
                  onChange={handleStringsChange}
                />
                <span className={styles.span}>12</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Количество струн</legend>
          <ul>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="type"
                  value={'Акустические гитары'}
                  onChange={handleTypesChange}
                />
                <span className={styles.span}>Акустические гитары</span>
              </label>
            </li>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="type"
                  value={'Электрогитары'}
                  onChange={handleTypesChange}
                />
                <span className={styles.span}>Электрогитары</span>
              </label>
            </li>
            <li className={styles.item}>
              <label className={styles.label}>
                <input
                  className={cn(styles.input, 'visually-hidden')}
                  type="checkbox"
                  name="type"
                  value={'Укулеле'}
                  onChange={handleTypesChange}
                />
                <span className={styles.span}>Укулеле</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <button className={styles.submit} type="submit">Показать</button>
      </form>
    </section>
  );
}

export default Filters;
