import React from 'react';
import Article from '../article/article';
import styles from './articles-list.module.scss';
import {useRouteMatch} from 'react-router-dom';
import {AppRoutes} from '../../../const';
import BasketArticle from '../basket-article/basket-article';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {selectBasket} from '../../../store/selectors';
import {useSelector} from 'react-redux';

function ArticlesList({articles}) {
  const {path} = useRouteMatch();
  const article = useSelector(selectBasket);
  const cards = path === AppRoutes.BASKET ? article : articles;

  const listStyle = cn(
    {[styles.catalog_list]: path === AppRoutes.CATALOG},
    {[styles.basket_list]: path === AppRoutes.BASKET},
  );
  const itemStyle = cn(
    {[styles.catalog_item]: path === AppRoutes.CATALOG},
    {[styles.basket_item]: path === AppRoutes.BASKET},
  );

  return (
    <section>
      <h2 className='visually-hidden'>Карточки товаров</h2>
      <ul className={listStyle}>
        {
          cards.map((card) => (
            <li className={itemStyle} key={card.name}>
              {path === AppRoutes.CATALOG && <Article info={card}/>}
              {path === AppRoutes.BASKET && <BasketArticle info={card}/>}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.node,
};

export default ArticlesList;
