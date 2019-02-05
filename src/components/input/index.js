import React, { Component } from 'react'
import { func, string, bool, number, oneOfType } from 'prop-types'
import clsx from 'clsx'

import Check from '../svg/Check'
import Invalid from '../svg/Invalid'

import s from './theme.css'

class Input extends Component {
  id = `input-id-${Math.random()
    .toString()
    .slice(2)}`

  onChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  render() {
    const {
      label,
      id,
      theme,
      outlined,
      textarea,
      onChange,
      type,
      thumbprint,
      invalid,
      valid,
      value,
      disabled,
      ...props
    } = this.props

    return (
      <div
        className={clsx(
          s.root,
          theme,
          invalid && s.invalid,
          valid && s.valid,
          (textarea || type === 'textarea') && s.textarea,
          disabled && s.disabled,
          !invalid && !valid && thumbprint && s.password,
        )}
      >
        {textarea ? (
          <textarea
            id={this.id}
            className={clsx(
              s.input,
              outlined && s.outlined,
              value && value.length > 0 && s.filled,
            )}
            onChange={this.onChange}
            value={value}
            {...props}
          />
        ) : (
          <input
            id={this.id}
            className={clsx(
              s.input,
              outlined && s.outlined,
              value && value.length > 0 && s.filled,
            )}
            onChange={this.onChange}
            type={type}
            value={value}
            {...props}
          />
        )}
        <label className={s.label} htmlFor={this.id}>
          {label}
        </label>
        {valid && (
          <div className={s.check}>
            <Check color="green" />
          </div>
        )}
        {invalid && (
          <div className={s.invalidStar}>
            <Invalid />
          </div>
        )}
      </div>
    )
  }
}

Input.defaultProps = {
  outlined: true,
  textarea: false,
  type: 'text',
  invalid: false,
  valid: false,
  disabled: false,
  thumbprint: false,
}

Input.propTypes = {
  label: string.isRequired,
  id: string,
  onChange: func,
  theme: string,
  outlined: bool,
  textarea: bool,
  type: string,
  invalid: bool,
  valid: bool,
  value: oneOfType([string, number]),
  disabled: bool,
  thumbprint: bool,
}

export default Input
