import React from 'react';
import styles from './pagination.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Pagination({articles, articlesPerPage, paginate, currentPage, nextPage, prevPage}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(articles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className={styles.pagination}>
      <h2 className='visually-hidden'>Пагинация</h2>
      <div className={styles.wrapper}>
        {
          currentPage > 1 &&
          <button
            className={cn(styles.button, styles.button__back)}
            type='button'
            onClick={prevPage}
          >
            Назад
          </button>
        }
        <ul className={styles.list}>
          {
            pageNumbers.length > 1 &&
            pageNumbers.map((page) => (
              <li className={styles.item} key={page}>
                <button
                  className={cn(styles.link, {[styles.active]: page === currentPage})}
                  onClick={() => paginate(page)}
                >
                  {page}
                </button>
              </li>
            ))
          }
        </ul>
        {
          currentPage < pageNumbers.length &&
          <button
            className={styles.button}
            type='button'
            onClick={nextPage}
          >
            Далее
          </button>
        }
      </div>
    </section>
  );
}

Pagination.propTypes = {
  articles: PropTypes.number.isRequired,
  articlesPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

export default Pagination;
