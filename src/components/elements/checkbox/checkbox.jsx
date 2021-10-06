import React from 'react';
import styles from './checkbox.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Checkbox({value, isChecked, disabled, onChange, name}) {
  return (
    <label className={styles.label}>
      <input
        className={cn(styles.input, 'visually-hidden')}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={onChange}
      />
      <span className={styles.span}>{value}</span>
    </label>
  );
}

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
