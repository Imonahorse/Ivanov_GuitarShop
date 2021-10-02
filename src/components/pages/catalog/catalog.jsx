import React from 'react';
import styles from './catalog.module.scss';
import Header from '../elements/header/header';
import Footer from '../elements/footer/footer';
import Intro from '../elements/intro/intro';
import Filters from '../elements/filters/filters';
import Products from '../elements/products/products';

function Catalog() {
  return (
    <>
      <Header/>
      <main className='container'>
        <Intro/>
        <div className={styles.column}>
          <Filters/>
          <Products/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Catalog;
