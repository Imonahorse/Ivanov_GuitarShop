import React from 'react';
import Article from '../article/article';
import styles from './article-list.module.scss';
import {useRouteMatch} from 'react-router-dom';
import {AppRoutes} from '../../../const';
import BasketArticle from '../basket-article/basket-article';
import cn from 'classnames';
import PropTypes from 'prop-types';

function ArticleList({articles}) {
  const {path} = useRouteMatch();
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
          articles.map((article) => (
            <li className={itemStyle} key={article.name}>
              {path === AppRoutes.MAIN && <Article info={article}/>}
              {path === AppRoutes.BASKET && <BasketArticle info={article}/>}
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
