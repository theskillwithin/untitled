import React, { useState, useMemo } from 'react'
import { object, bool, string } from 'prop-types'
import moment from 'moment'
import get from 'lodash/get'
import clsx from 'clsx'
import NearMeIcon from '@sdog/components/svg/NearMe'
import Map from '@sdog/components/map'

import theme from './theme.css'

const JobScheduleEvent = ({ open, event, userType }) => {
  const [isOpen, setIsOpen] = useState(open)

  if (!event) return null

  const isPractice = userType === 'practice'
  const practice = get(event, 'criteria.practice_details', {})
  const startDate = moment(get(event, 'criteria.duration.start_date')).utc()
  const geoLocation = get(practice, 'geocode', {})

  const title = isPractice
    ? 'Job Position'
    : `${practice.name} @ ${startDate.format('M/D/YY')}`
  const subTitle = isPractice ? 'UserName + JobType' : buildAddress(practice.address)

  return (
    <div>
      <button type="button" className={theme.event} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={theme.red}>{startDate.format('D')}</h2>

        <div className={theme.eventDetails}>
          <h5>{title}</h5>
          <h6>{subTitle}</h6>
        </div>

        {!isPractice && <NearMeIcon />}
      </button>

      {!isPractice && (
        <div className={clsx(theme.map, isOpen && theme.open)}>
          <Map isMarkerShown position={geoLocation} defaultCenter={geoLocation} />
        </div>
      )}
    </div>
  )
}

JobScheduleEvent.propTypes = {
  event: object.isRequired,
  open: bool,
  userType: string.isRequired,
}

JobScheduleEvent.defaultProps = {
  open: false,
}

function buildAddress(address) {
  return useMemo(
    () => `${address.line_1} ${address.city}, ${address.state} ${address.zip}`,
    [address],
  )
}

export default JobScheduleEvent
