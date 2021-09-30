import React from 'react';
import styles from './intro.module.scss';

function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>Каталог гитар</h1>
      <ul className={styles.breadcrumbs}>
        <li className={styles.item}>
          <a href='/'>Главная</a>
        </li>
        <li className={styles.item}>
          <a href='/'>Каталог</a>
        </li>
      </ul>
    </section>
  );
}

export default Intro;
