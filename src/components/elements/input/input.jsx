import React from 'react';
import styles from './input.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Input({className, label, value, ...attrs}) {
  const inputStyles = cn(
    styles.input,
    {'visually-hidden': !className},
    className,
  );

  return (
    <label className={styles.label}>
      <input
        className={inputStyles}
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  className: '',
};

export default Input;
