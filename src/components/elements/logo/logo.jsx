import React from 'react';
import styles from './logo.module.scss';
import logoHeader from './logo-header.svg';
import logoFooter from './logo-footer.svg';
import {useRouteMatch, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoutes} from '../../../const';


function Logo({isFooter}) {
  const {path} = useRouteMatch();
  const logoImage = isFooter ? logoFooter : logoHeader;
  const linkClass = path === AppRoutes.CATALOG ? styles.logo : styles.logo__link;

  return (
    <Link className={linkClass} to={AppRoutes.CATALOG}>
      <img src={logoImage} alt='Логотип сайта'/>
    </Link>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

export default Logo;
