import React from 'react'
import { string, number } from 'prop-types'
import clsx from 'clsx'

import SVGProfilePhoto from '../files/profile-photo.svg'

import theme from './theme.css'

const ProfilePhotoSVG = props => (
  <span
    className={clsx(props.className, theme.svg)}
    dangerouslySetInnerHTML={{ __html: SVGProfilePhoto }}
    style={{ width: props.size, height: props.size }}
  />
)

ProfilePhotoSVG.defaultProps = {
  className: '',
  size: 122,
}

ProfilePhotoSVG.propTypes = {
  className: string,
  size: number,
}

export default ProfilePhotoSVG
