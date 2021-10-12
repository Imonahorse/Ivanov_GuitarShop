import React, {useState} from 'react';
import styles from './modal.module.scss';
import PropTypes from 'prop-types';
import {selectActiveArticle} from '../../../store/selectors';
import {useDispatch, useSelector} from 'react-redux';
import BasketArticle from '../basket-article/basket-article';
import {addToBasket} from '../../../store/actions';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';
import Button from '../button/button';
import {AppRoutes} from '../../../const';

ReactModal.setAppElement('#root');

function Modal({setModalOpen, modalOpen}) {
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

  const handleAfterOpen = () => {
    document.body.classList.add(styles.open);
  };

  const handleAfterClose = () => {
    document.body.classList.remove(styles.open);
  };

  return (
    <ReactModal
      isOpen={modalOpen}
      contentLabel={'Добавить в корзину'}
      overlayClassName={styles.modal}
      className={cn(styles.content, {[styles.content__second]: secondPopupState})}
      onRequestClose={handleCloseModalClick}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <section>
        <button
          className={styles.close}
          onClick={handleCloseModalClick}
          type='button'
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
              <Link to={AppRoutes.BASKET} className={cn(styles.button, styles.button__left)}>
                Перейти в корзину
              </Link>
              <Button
                orange
                className={styles.button}
                onClick={handleCloseModalClick}
              >
                Продолжить покупки
              </Button>
            </div>
          </>
        }
      </section>
    </ReactModal>
  );
}


Modal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};

export default Modal;
