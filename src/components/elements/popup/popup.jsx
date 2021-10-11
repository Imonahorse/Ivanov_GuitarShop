import React, {useState} from 'react';
import styles from './popup.module.scss';
import PropTypes from 'prop-types';
import {selectActiveArticle} from '../../../store/selectors';
import {useDispatch, useSelector} from 'react-redux';
import BasketArticle from '../basket-article/basket-article';
import {addToBasket} from '../../../store/actions';
import cn from 'classnames';
import {Link} from 'react-router-dom';

function Popup({setModalOpen}) {
  const article = useSelector(selectActiveArticle);
  const dispatch = useDispatch();
  const [firstPopupState, setFirstPopupState] = useState(true);
  const [secondPopupState, setSecondPopupState] = useState(false);

  const handleCloseModalClick = () => {
    setModalOpen(false);
  };

  const handleAddToBasketClick = () => {
    setFirstPopupState(false);
    setSecondPopupState(true);
    dispatch(addToBasket(article));
  };

  return (
    <section className={styles.popup}>
      <div className={cn(styles.content, {[styles.content__second]: secondPopupState})}>
        <button
          className={styles.close}
          onClick={handleCloseModalClick}
          type="button"
        />
        {
          firstPopupState &&
          <>
            <h2 className={styles.title}>Добавить товар в корзину</h2>
            <BasketArticle
              popup
              info={article}
              handleAddToBasketClick={handleAddToBasketClick}
              handleCloseModalClick={handleCloseModalClick}
            />
          </>
        }
        {
          secondPopupState &&
          <>
            <h2 className={styles.title}>Товар успешно добавлен в корзину</h2>
            <div className={styles.controls}>
              <Link to={'/basket'} className={cn(styles.button, styles.button__left)}>Перейти в корзину</Link>
              <button className={styles.button} onClick={handleCloseModalClick}>Продолжить покупки</button>
            </div>
          </>
        }
      </div>
    </section>
  );
}

{/*// <div className={styles.wrapper}>*/
}
{/*//   <div className={styles.img}>*/
}
{/*//     <img*/
}
{/*//       src={img}*/
}
{/*//       width="56"*/
}
{/*//       height="128"*/
}
{/*//       alt="Гитара"*/
}
{/*//     />*/
}
{/*//   </div>*/
}
{/*//   <div className={styles.info}>*/
}
{/*//     <h3 className={styles.name}>{name}</h3>*/
}
{/*//     <p className={styles.number}>Артикул: SO757575</p>*/
}
{/*//     <p className={styles.description}>*/
}
{/*      <span>{type}</span>*/
}
{/*      ,*/
}
{/*      <span>{} струнная</span>*/
}
{/*    </p>*/
}
{/*    <p className={styles.price}>Цена: {makePriceString(price)} ₽</p>*/
}
{/*  </div>*/
}
{/*  <button className={styles.button} onClick={handleBuyClick}>Добавить в корзину</button>*/
}
{/*</div>*/
}

Popup.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default Popup;
