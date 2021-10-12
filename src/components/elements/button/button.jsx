import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({img, orange, gray, className, disabled, onClick, children, ...attrs}){
  const Tag = attrs.href ? 'a' : 'button';

  const buttonClass = cn(
    {[styles.orange]: orange},
    {[styles.gray]: gray},
    {[styles.button__img]: img},
    styles.button,
    className,
  );

  return(
    <Tag
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  img: PropTypes.bool,
  children: PropTypes.string,
  gray: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  orange: PropTypes.bool,
};

Button.defaultProps = {
  img: false,
  children: 'button',
  gray: false,
  orange: false,
  className: '',
  onClick: () => {},
  disabled: false,
};

export default Button;
