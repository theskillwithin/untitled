import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import map from 'lodash/map'

import Circle from '../svg/Circle'
import Star from '../svg/Star'

import theme from './theme.css'


const stars = []
const circles = []

const StarTitle = ({ title }) => (
  <h2 className={classnames(theme.starTitle, theme.title)}>
    <span className={theme.text}>{title}</span>
    <span className={theme.stars}>
      {map(stars, (star, i) => (
        <Star
          className={theme.star}
          key={`circle:${i + 1}`}
          color={star.color}
        />
      ))}
    </span>

    <span className={theme.circles}>
      {map(circles, (circle, i) => (
        <Circle
          className={theme.circle}
          key={`circle:${i + 1}`}
          color={circle.color}
        />
      ))}
    </span>
  </h2>
)

StarTitle.defaultProps = {
  title: '',
}

StarTitle.propTypes = {
  title: PropTypes.string,
}

export default StarTitle
