import React from 'react';
import styles from './header.module.scss';
import searchIcon from './icon-search.svg';
import mapIcon from './icon-map.svg';
import basketIcon from './icon-basket.svg';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../const';

const links = ['Каталог', 'Где купить?', 'О компании', 'Сервис-центры'];
const userMenuIcons = [
  {
    description: 'Map',
    img: mapIcon,
    link: '',
  },
  {
    description: 'Search',
    img: searchIcon,
    link: '',
  },
  {
    description: 'Basket',
    img: basketIcon,
    link: AppRoutes.BASKET,
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Logo/>
          </div>
          <ul className={styles.site_menu}>
            {
              links.map((link) => (
                <li className={styles.site_menu__item} key={link}>
                  <a className={styles.link} href="/">{link}</a>
                </li>
              ))
            }
          </ul>
          <ul className={styles.user_menu}>
            {
              userMenuIcons.map(({description, img, link}) => (
                <li className={styles.user_menu__item} key={description}>
                  <Link to={link}>
                    <img className={styles.user_menu__img} src={img} alt={description}/>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
