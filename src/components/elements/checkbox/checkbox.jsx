import React from 'react';
import styles from './checkbox.module.scss';
import PropTypes from 'prop-types';

function Checkbox({label}) {
  return(
    <label className={styles.label}>
      <input className={`${styles.input} visually-hidden`} type='checkbox'/>
      <span className={styles.span}>{label}</span>
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
