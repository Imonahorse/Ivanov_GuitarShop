import React from 'react';
import Article from '../article/article';
import styles from './article-list.module.scss';
import guitarImg1 from './guitar-1.png';
import guitarImg2 from './guitar-2.png';
import guitarImg3 from './guitar-3.png';
import guitarImg4 from './guitar-4.png';
import guitarImg5 from './guitar-5.png';
import guitarImg6 from './guitar-6.png';

const articles = [
  {
    name: 'Честер Bass',
    price: 17500,
    rating: 4.5,
    vote: 15,
    img: guitarImg1,
  },
  {
    name: 'СURT Z300',
    price: 29500,
    rating: 4,
    vote: 9,
    img: guitarImg2,
  },
  {
    name: 'Roman LX',
    price: 6800,
    rating: 4,
    vote: 21,
    img: guitarImg3,
  },
  {
    name: 'СURT T300',
    price: 30000,
    rating: 4.5,
    vote: 15,
    img: guitarImg5,
  },
  {
    name: 'Dania Super',
    price: 3500,
    rating: 4,
    vote: 5,
    img: guitarImg4,
  },
  {
    name: 'Честер WX ',
    price: 15300,
    rating: 4.5,
    vote: 17,
    img: guitarImg1,
  },
  {
    name: 'Dania VX',
    price: 2200,
    rating: 4,
    vote: 5,
    img: guitarImg3,
  },
  {
    name: 'Честер Plus',
    price: 30000,
    rating: 5,
    vote: 27,
    img: guitarImg6,
  },
  {
    name: 'Виолана 300',
    price: 1700,
    rating: 4,
    vote: 3,
    img: guitarImg4,
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
