import React from 'react';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import Intro from '../../elements/intro/intro';
import ArticleList from '../../elements/article-list/article-list';
import Order from '../../elements/order/order';

function Basket() {
  return (
    <>
      <Header/>
      <main className="container">
        <Intro/>
        <ArticleList/>
        <Order/>
      </main>
      <Footer/>
    </>
  );
}

export default Basket;
