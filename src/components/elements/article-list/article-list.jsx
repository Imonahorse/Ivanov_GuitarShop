import React from 'react';
import Article from '../article/article';
import styles from './article-list.module.scss';

const articles = [
  {
    name: 'Честер Bass',
    price: 17500,
    rating: 4.5,
    vote: 15,
    img: 'img',
  },
  {
    name: 'СURT Z300',
    price: 29500,
    rating: 4,
    vote: 9,
    img: 'img',
  },
  {
    name: 'Roman LX',
    price: 6800,
    rating: 4,
    vote: 21,
    img: 'img',
  },
  {
    name: 'СURT T300',
    price: 30000,
    rating: 4.5,
    vote: 15,
    img: 'img',
  },
  {
    name: 'Dania Super',
    price: 3500,
    rating: 4,
    vote: 5,
    img: 'img',
  },
  {
    name: 'Честер WX ',
    price: 15300,
    rating: 4.5,
    vote: 17,
    img: 'img',
  },
  {
    name: 'Dania VX',
    price: 2200,
    rating: 4,
    vote: 5,
    img: 'img',
  },
  {
    name: 'Честер Plus',
    price: 30000,
    rating: 5,
    vote: 27,
    img: 'img',
  },
  {
    name: 'Виолана 300',
    price: 1700,
    rating: 4,
    vote: 3,
    img: 'img',
  },
];

function ArticleList() {
  return (
    <section>
      <h2 className='visually-hidden'>Каталог</h2>
      <ul className={styles.list}>
        {
          articles.map((article) => (
            <li className={styles.item} key={article.name}>
              <Article info={article}/>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default ArticleList;
