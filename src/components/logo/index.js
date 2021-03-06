import React from 'react'
import { string, bool } from 'prop-types'
import clsx from 'clsx'

import theme from './theme.css'

const LogoInternals = ({ className, width, hideText, hideTextOnMobile, largeTxt }) => (
  <div className={clsx(className, theme.logo)}>
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="555 12 63.116 46.148">
      <g transform="translate(555 12)">
        <path className={theme.path} d="M515,93" transform="translate(-463.557 -83.71)" />
        <path
          className={theme.path2}
          d="M62.93,14.684H55.538c-.649-.749-1.079-6.812-7.192-6.792h-2.9C44.81,6.842,43.352,2.9,40.155,0c-3.976,5.754-2.7,14.484-2.7,15.682.1,6.263-17.58,12.256-24.573,11.487-7.731-6.932-.05-12.136,1.3-12.386C10.338,12.776,2.367,21.206,8.59,30.166A26.164,26.164,0,0,0,0,46.148H8.391c0-1.269-.719-2.3-1.6-2.3,4.1-3.986,9.17-7.482,14.284-7.492a9.542,9.542,0,0,1,9.29,9.789h8.491c0-1.269-.719-2.3-1.6-2.3C35.88,38.657,41.853,30.566,44.65,26.77c1.828-2.547,5.823-1.708,8.59-1.7,4.994,0,9.479-3.936,9.489-8.191A2.417,2.417,0,0,0,62.93,14.684Zm-12.586-1.9a1,1,0,1,1,1-1A1,1,0,0,1,50.344,12.786Z"
        />
      </g>
    </svg>

    {!hideText ? (
      <span
        className={clsx(
          theme.logoText,
          hideTextOnMobile && theme.hideTextOnMobile,
          largeTxt && theme.largeTxt,
        )}
      >
        StaffingDog
      </span>
    ) : null}
  </div>
)

const Logo = props => {
  if (props.disabledLink) return <LogoInternals {...props} />
  return (
    <a href="/" className={theme.link}>
      <LogoInternals {...props} />
    </a>
  )
}

LogoInternals.defaultProps = {
  width: '54px',
  largeTxt: false,
  className: '',
  hideText: false,
  hideTextOnMobile: false,
}

LogoInternals.propTypes = {
  width: string,
  largeTxt: bool,
  className: string,
  hideText: bool,
  hideTextOnMobile: bool,
}

Logo.defaultProps = {
  disabledLink: false,
}

Logo.propTypes = {
  disabledLink: bool,
}

export default Logo
