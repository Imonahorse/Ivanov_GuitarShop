import React, {useEffect, useState} from 'react';
import styles from './filters.module.scss';
import {useDispatch} from 'react-redux';
import {addPriceFrom, addPriceTo, addStringsCount, addTypes} from '../../../store/actions';
// import cn from 'classnames';
import Input from '../input/input';

const stringsState = [
  {id: 1, value: '4', label: '4', isChecked: false, disabled: false},
  {id: 2, value: '6', label: '6', isChecked: false, disabled: false},
  {id: 3, value: '7', label: '7', isChecked: false, disabled: false},
  {id: 4, value: '12', label: '12', isChecked: false, disabled: false},
];

const typesState = [
  {
    id: 1,
    label: 'Акустические гитары',
    value: 'акустическая гитара',
    isChecked: false,
    disabled: false,
    strings: ['6', '7', '12'],
  },
  {id: 2, label: 'Электрогитары', value: 'электрогитара', isChecked: false, disabled: false, strings: ['4', '6', '7']},
  {id: 3, label: 'Укулеле', value: 'укулеле', isChecked: false, disabled: false, strings: ['4']},
];


function Filters() {
  const [priceTo, setPriceTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [strings, setStrings] = useState(stringsState);
  const [types, setTypes] = useState(typesState);

  useEffect(() => {
    const activeTypes = types.filter((item) => item.isChecked);

    const activeStrings = activeTypes.reduce((acc, current) => {
      acc.push(...current.strings);
      return acc;
    }, []);

    const activeStringsState = new Set(activeStrings);

    setStrings((prev) => prev.map((item) => {
      item.disabled = !activeStringsState.has(item.value);
      if (!activeStringsState.size) {
        item.disabled = false;
      }
      return item;
    }));

  }, [types]);

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

  return (
    <section className={styles.filter}>
      <h2 className={styles.title}>Фильтр</h2>
      <form action='' method='post' onSubmit={submit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Цена, ₽</legend>
          <ul className={styles.price_list}>
            <li className={styles.price_item}>
              <input
                className={styles.price_input}
                onChange={handlePriceChange}
                name='from'
                value={priceFrom}
                type='text'
                placeholder='1 000'
                onBlur={handlePriceBlue}
              />
            </li>
            <li className={styles.price_item}>
              <input
                onChange={handlePriceChange}
                className={styles.price_input}
                name='to'
                value={priceTo}
                type='text'
                placeholder='30 000'
                onBlur={handlePriceBlue}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Тип гитары</legend>
          <ul>
            {
              typesState.map(({id, label, value, isChecked, disabled}) => (
                <li key={id} className={styles.item}>
                  <Input
                    type='checkbox'
                    name='type'
                    value={value}
                    label={label}
                    checked={isChecked}
                    disabled={disabled}
                    onChange={handleTypesChange}
                  />
                </li>
              ))
            }
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Количество струн</legend>
          <ul>
            {
              strings.map(({id, value, label, isChecked, disabled}) => (
                <li key={id} className={styles.item}>
                  <Input
                    value={value}
                    label={label}
                    type="checkbox"
                    name="string"
                    onChange={handleStringsChange}
                    checked={isChecked}
                    disabled={disabled}
                  />
                </li>
              ))
            }
          </ul>
        </fieldset>
        <button className={styles.submit} type='submit'>Показать</button>
      </form>
    </section>
  );
}

export default Filters;
