import React from 'react';
import styles from './catalog.module.scss';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import Intro from '../../elements/intro/intro';
import Filters from '../../elements/filters/filters';
import Sorting from '../../elements/sorting/sorting';
import ArticleList from '../../elements/article-list/article-list';
import Pagination from '../../elements/pagination/pagination';
import Popup from '../../elements/popup/popup';

function Catalog() {
  return (
    <>
      <Header/>
      <main className="container">
        <Popup />
        <Intro/>
        <div className={styles.column}>
          <Filters/>
          <div>
            <Sorting/>
            <ArticleList/>
            <Pagination/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Catalog;
