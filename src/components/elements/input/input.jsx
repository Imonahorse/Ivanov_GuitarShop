import React from 'react';
import styles from './input.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Input({label, value, ...attrs}) {
  return (
    <label className={styles.label}>
      <input
        className={cn(styles.input, 'visually-hidden')}
        value={value}
        {...attrs}
      />
      {
        label && <span className={styles.span}>{label}</span>
      }
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // isChecked: PropTypes.bool.isRequired,
  // disabled: PropTypes.bool.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default Input;
