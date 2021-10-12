import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({white, img, orange, gray, className, disabled, onClick, children, ...attrs}){
  const Tag = attrs.to ? 'Link' : 'button';

  const buttonClass = cn(
    {[styles.orange]: orange},
    {[styles.gray]: gray},
    {[styles.button__img]: img},
    {[styles.white]: white},
    className,
    styles.button,
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
  white: PropTypes.bool,
  img: PropTypes.bool,
  children: PropTypes.string,
  gray: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  orange: PropTypes.bool,
};

Button.defaultProps = {
  white: false,
  img: false,
  children: 'button',
  gray: false,
  orange: false,
  className: '',
  onClick: () => {},
  disabled: false,
};

export default Button;
