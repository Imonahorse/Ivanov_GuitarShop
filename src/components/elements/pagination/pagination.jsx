import React from 'react';
import styles from './pagination.module.scss';

const pages = ['1', '2', '...', '7', 'Далее'];

function Pagination() {
  return (
    <section className={styles.pagination}>
      <h2 className='visually-hidden'>Пагинация</h2>
      <ul className={styles.list}>
        {
          pages.map((page) => (
            <li className={styles.item} key={page}>
              <a className={styles.link} href='/'>
                {page}
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Pagination;
