import React from 'react';
import styles from './price-input.module.scss';
import PropTypes from 'prop-types';

function PriceInput({label}) {
  return(
    <input className={styles.input} type='text' placeholder={label}/>
  );
}

PriceInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PriceInput;
