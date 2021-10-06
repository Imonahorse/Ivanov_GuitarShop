import React from 'react';
import Article from '../article/article';
import styles from './article-list.module.scss';
import {useRouteMatch} from 'react-router-dom';
import {AppRoutes} from '../../../const';
import BasketArticle from '../basket-article/basket-article';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {selectBasket} from '../../../store/selectors';
import {useSelector} from 'react-redux';

function ArticleList({articles}) {
  const {path} = useRouteMatch();
  const article = useSelector(selectBasket);
  const cards =  path === AppRoutes.BASKET ? article : articles;
  const listStyle = cn(
    {[styles.catalog_list]: path === AppRoutes.MAIN},
    {[styles.basket_list]: path === AppRoutes.BASKET},
  );
  const itemStyle = cn(
    {[styles.catalog_item]: path === AppRoutes.MAIN},
    {[styles.basket_item]: path === AppRoutes.BASKET},
  );

  return (
    <section>
      <h2 className="visually-hidden">Карточки товаров</h2>
      <ul className={listStyle}>
        {
          cards.map((card) => (
            <li className={itemStyle} key={card.name}>
              {path === AppRoutes.MAIN && <Article info={card}/>}
              {path === AppRoutes.BASKET && <BasketArticle info={card}/>}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.node,
};

export default ArticleList;
