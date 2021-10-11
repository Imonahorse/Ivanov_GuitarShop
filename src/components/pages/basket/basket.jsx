import React from 'react';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import Intro from '../../elements/intro/intro';
import ArticlesList from '../../elements/articles-list/articles-list';
import Order from '../../elements/order/order';
import {useSelector} from 'react-redux';
import {selectBasket} from '../../../store/selectors';
import EmptyBasket from '../../elements/empty-basket/empty-basket';

function Basket() {
  const article = useSelector(selectBasket);

  return (
    <>
      <Header/>
      <main className="container">
        <Intro/>
        {
          article.length === 0 ?
            <EmptyBasket/> :
            <>
              <ArticlesList/>
              <Order/>
            </>
        }
      </main>
      <Footer/>
    </>
  );
}

export default Basket;
