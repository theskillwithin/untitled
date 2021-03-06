import React from 'react'
import { string } from 'prop-types'
import clsx from 'clsx'

import SVGSend from '../files/send.svg'

import theme from './theme.css'

const Send = ({ className }) => (
  <span
    className={clsx(className, theme.svg)}
    dangerouslySetInnerHTML={{ __html: SVGSend }}
  />
)

Send.defaultProps = {
  className: '',
}

Send.propTypes = {
  className: string,
}

export default Send
