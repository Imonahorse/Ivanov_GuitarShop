import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import styles from './article.module.scss';
import Button from '../button/button';
import {makePriceString} from '../../../const';
import Modal from '../modal/modal';
import {useDispatch} from 'react-redux';
import {addActiveArticle} from '../../../store/actions';
import articleProps from './article-props';

const YELLOW = '#FFD168';
const RATING_SIZE = 15;
const RATING_COUNT = 5;

function Article({info}) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const {id, name, price, rating, vote, img} = info;

  const handleBuyClick = (cardId) => {
    setModalOpen(true);
    dispatch(addActiveArticle(cardId));
  };

  return (
    <article className={styles.article} id={id}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          width='68'
          height='190'
          src={img}
          alt='Изображение товара'
        />
      </div>
      <div className={styles.description}>
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{makePriceString(price)} ₽</p>
        </div>
        <div className={styles.rating}>
          <ReactStars
            classNames={styles.stars}
            count={RATING_COUNT}
            size={RATING_SIZE}
            isHalf
            edit={false}
            activeColor={YELLOW}
            value={Number(rating)}
          />
          <p className={styles.count}>{vote}</p>
        </div>
        <div className={styles.controls}>
          <Button gray href='/' className={styles.link}>
            Подробнее
          </Button>
          <Button
            img
            orange
            type='button'
            onClick={() => handleBuyClick(id)}
          >
            Купить
          </Button>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>}
    </article>
  );
}

Article.propTypes = {
  info: articleProps,
};

export default Article;
