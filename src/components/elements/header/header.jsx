import React from 'react';
import styles from './header.module.scss';
import searchIcon from './icon-search.svg';
import mapIcon from './icon-map.svg';
import basketIcon from './icon-basket.svg';
import logo from './logo-header.svg';

const links = ['Каталог', 'Где купить?', 'О компании', 'Сервис-центры'];
const userMenuIcons = [
  {
    description: 'Map',
    img: mapIcon,
  },
  {
    description: 'Search',
    img: searchIcon,
  },
  {
    description: 'Basket',
    img: basketIcon,
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a className={styles.logo_link} href='/'>
              <img src={logo} alt='Logo'/>
            </a>
          </div>
          <ul className={styles.site_menu}>
            {
              links.map((link) => (
                <li className={styles.site_menu__item} key={link}>
                  <a className={styles.link} href='/'>{link}</a>
                </li>
              ))
            }
          </ul>
          <ul className={styles.user_menu}>
            {
              userMenuIcons.map(({description, img}) => (
                <li className={styles.user_menu__item} key={description}>
                  <a href=''>
                    <img className={styles.user_menu__img} src={img} alt={description}/>
                  </a>
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
