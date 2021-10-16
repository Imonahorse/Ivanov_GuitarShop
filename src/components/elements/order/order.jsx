import React, {useEffect, useState} from 'react';
import styles from './order.module.scss';
import cn from 'classnames';
import {selectTotalPrice} from '../../../store/selectors';
import {useSelector} from 'react-redux';
import Button from '../button/button';
import {makePriceString} from '../../../const';
import Input from '../input/input';

const MAX_LENGTH = 11;

const NameSpace = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA: 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
};

function Order() {
  const totalPrice = useSelector(selectTotalPrice);
  const [price, setPrice] = useState(totalPrice);
  const [promocode, setPromocode] = useState('');
  const [promoError, setPromoError] = useState(false);

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);

  const handleInputChange = (e) => {
    const {value} = e.target;

    if (value.length > MAX_LENGTH) {
      return;
    }

    setPromocode(value.trim());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const guitarHitDiscount = totalPrice - (totalPrice * 10 / 100);

    const superGitaraDiscount = totalPrice - 700;

    const gitara2020Discount = (totalPrice * 30 / 100) <= 3000 ? totalPrice - (totalPrice * 30 / 100) : totalPrice - 3000;

    switch (promocode) {
      case NameSpace.GITARAHIT:
        setPrice(guitarHitDiscount);
        setPromoError(false);
        break;

      case NameSpace.SUPERGITARA:
        setPrice(superGitaraDiscount);
        setPromoError(false);
        break;

      case NameSpace.GITARA2020:
        setPrice(gitara2020Discount);
        setPromoError(false);
        break;

      default:
        setPrice(totalPrice);
        setPromoError(true);
    }
  };

  return (
    <section className={styles.order}>
      <h2 className='visually-hidden'>Оформить покупку</h2>
      <div>
        <p className={styles.title}>Промокод на скидку</p>
        <p className={styles.description}>Введите свой промокод если он у вас есть</p>
        <form
          className={styles.form}
          method='post'
          onSubmit={handleFormSubmit}
        >
          <Input
            className={styles.input}
            type='text'
            value={promocode}
            onChange={handleInputChange}
          />
          <Button
            gray
            type='submit'
            className={styles.button}
          >
            Применить купон
          </Button>
          <span className={styles.error}>
            {promoError && 'Промокод недействителен'}
          </span>
        </form>
      </div>
      <div className={styles.right}>
        <p className={styles.price}>Всего: {makePriceString(price)} ₽ </p>
        <Button
          orange
          className={cn(styles.button, styles.button__orange)}
          type='button'
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default Order;
