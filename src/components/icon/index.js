import React from 'react'
import { oneOfType, bool, string } from 'prop-types'
import classnames from 'classnames'
import { Icon as MIcon } from 'rmwc/Icon'

import theme from './theme.css'


const Icon = ({ inButton, strategy, primary, size, ...props }) => (
  <MIcon
    strategy={strategy}
    className={classnames(
      theme.root,
      inButton && 'mdc-button__icon',
      'left' === inButton && theme.left,
      'right' === inButton && theme.right,
      primary && theme.primary,
      size && theme[`size-${size}`],
    )}
    {...props}
  />
)

Icon.defaultProps = {
  inButton: false,
  strategy: 'ligature',
  primary: false,
  size: false,
}

Icon.propTypes = {
  inButton: oneOfType([
    bool,
    string,
  ]),
  strategy: string,
  primary: bool,
  size: oneOfType([
    string,
    bool,
  ]),
}

export default Icon
