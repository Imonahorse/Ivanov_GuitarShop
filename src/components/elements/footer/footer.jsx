import React from 'react';
import styles from './footer.module.scss';
import logoFooter from './logo-footer.svg';
import facebookIcon from './facebook.svg';
import instagramIcon from './instagram.svg';
import twitterIcon from './twitter.svg';

const catalogLinks = ['Акустические гитары', 'Классические гитары', 'Электрогитары', 'Бас-гитары', 'Укулеле'];
const infoLinks = ['Где купить?', 'Блог', 'Вопрос - ответ', 'Возврат', 'Сервис-Центры'];
const descriptions = [
  'Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.',
  'Все инструменты проверены, отстроены и доведены до идеала!',
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.social}>
          <div className={styles.logo}>
            <a className={styles.logo_link} href='/'>
              <img src={logoFooter} alt='Логотип сайта'/>
            </a>
          </div>
          <ul className={styles.social_list}>
            <li className={styles.social_item}>
              <a className={styles.link} href='/'>
                <img src={facebookIcon} alt=''/>
              </a>
            </li>
            <li className={styles.social_item}>
              <a className={styles.link} href='/'>
                <img src={instagramIcon} alt=''/>
              </a>
            </li>
            <li className={styles.social_item}>
              <a className={styles.link} href='/'>
                <img src={twitterIcon} alt=''/>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <div className={styles.about_us}>
            <h3 className={styles.title}>О нас</h3>
            <ul>
              {
                descriptions.map((description) => (
                  <li key={description} className={styles.about_us_item}>
                    <p className={styles.description}>{description}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles.catalog}>
            <h3 className={styles.title}>Каталог</h3>
            <ul>
              {
                catalogLinks.map((link) => (
                  <li className={styles.catalog_item} key={link}>
                    <a className={styles.link} href='/'>{link}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Информация</h3>
            <ul>
              {
                infoLinks.map((link) => (
                  <li className={styles.info_item} key={link}>
                    <a className={styles.link} href='/'>{link}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.title}>Контакты</h3>
          <ul>
            <li className={styles.contacts_item}>
              <address className={styles.address}>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</address>
              <a className={styles.tel} href='tel:88125005050'>8-812-500-50-50</a>
            </li>
            <li className={styles.contacts_item}>
              <p className={styles.time}>Режим работы:
                <span>с 11:00 до 20:00,</span> без выходных.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
