import React from 'react'
import { bool, string, oneOfType, func, node, oneOf, number } from 'prop-types'
import classnames from 'classnames'

import theme from './theme.css'

const Button = ({
  primary,
  secondary,
  secondaryDark,
  round,
  short,
  className,
  onClick,
  disabled,
  loading,
  children,
  type,
  size,
  width,
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={classnames(
      theme.button,
      round && theme.round,
      short && theme.short,
      primary && theme.primary,
      secondary && theme.secondary,
      secondaryDark && theme.secondary,
      secondaryDark && theme.secondaryDark,
      className && className,
      size && theme[size],
      width && theme.width,
      disabled && theme.disabled,
    )}
    onClick={onClick}
    type={type}
    disabled={disabled || loading}
    style={{ width }}
    {...props}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'submit',
  primary: true,
  secondary: false,
  secondaryDark: false,
  round: false,
  short: false,
  className: false,
  disabled: false,
  loading: false,
  size: 'mediumSmall',
  width: 'auto',
}

Button.propTypes = {
  onClick: func.isRequired,
  primary: bool,
  secondary: bool,
  secondaryDark: bool,
  round: bool,
  short: bool,
  className: oneOfType([string, bool]),
  children: oneOfType([string, node]),
  disabled: bool,
  type: oneOf(['button', 'submit', 'reset']),
  loading: bool,
  size: oneOf(['small', 'mediumSmall', 'medium', 'large']),
  width: oneOfType([string, number]),
}

export default Button
