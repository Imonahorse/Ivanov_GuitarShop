import React from 'react';
import styles from './intro.module.scss';
import {Link, useRouteMatch} from 'react-router-dom';
import {AppRoutes} from '../../../const';

const PaginationLinks = [
  {
    label: 'Главная',
    link: '',
  },
  {
    label: 'Каталог',
    link: AppRoutes.CATALOG,
  },
  {
    label: 'Корзина',
    link: AppRoutes.BASKET,
  },
];

function Intro() {
  const {path} = useRouteMatch();
  const page = () => {
    switch (path) {
      case AppRoutes.CATALOG:
        return 'Каталог гитар';
      case AppRoutes.BASKET:
        return 'Корзина';
      default:
        break;
    }
  };
  const pageIndex = PaginationLinks.findIndex((item) => item.link === path);
  const links = PaginationLinks.slice(0, pageIndex + 1);

  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>{page()}</h1>
      <ul className={styles.breadcrumbs}>
        {
          links.map(({label, link}) => (
            <li key={label} className={styles.item}>
              <Link className={styles.link} to={link}>{label}</Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Intro;
