import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({orange, gray, small, className, disabled, onClick, children, ...attrs}){

  const Tag = attrs.href ? 'a' : 'button';
  const buttonClass = cn(
    {[styles.small]: small},
    {[styles.orange]: orange},
    {[styles.gray]: gray},
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
  small: PropTypes.bool,
  children: PropTypes.node,
  gray: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  orange: PropTypes.bool,
};

Button.defaultProps = {
  small: false,
  children: 'button',
  gray: false,
  orange: false,
  className: '',
  onClick: () => {},
  disabled: false,
};

export default Button;
