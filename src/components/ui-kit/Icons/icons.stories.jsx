import { Box } from '@mui/material'
import React from 'react'

import ArrowIcon from './iconComponents/ArrowIcon'
import AvatarIcon from './iconComponents/AvatarIcon'
import ChartsIcon from './iconComponents/ChartsIcon'
import DoubleQuotesIcon from './iconComponents/DoubleQuotesIcon'
import HeaderBackgroundIcon from './iconComponents/HeaderBackgroundIcon'
import LaptopIcon from './iconComponents/LaptopIcon'
import MeetIcon from './iconComponents/MeetIcon'
import MobileIcon from './iconComponents/MobileIcon'
import PeopleIcon from './iconComponents/PeopleIcon'

export default {
  title: 'atoms/icons',
}

const Row = (props) => <Box p={2} {...props} />
const Cell = (props) => (
  <Box display="inline-block" m={1} {...props} style={{ cursor: 'pointer' }} />
)

export const icons = () => (
  <Box>
    <Row>
      <Cell>
        <ArrowIcon title="ArrowIcon" />
      </Cell>

      <Cell>
        <AvatarIcon title="AvatarIcon" />
      </Cell>

      <Cell>
        <ChartsIcon title="ChartsIcon" />
      </Cell>

      <Cell>
        <DoubleQuotesIcon title="DoubleQuotesIcon" />
      </Cell>

      <Cell>
        <HeaderBackgroundIcon title="HeaderBackgroundIcon" />
      </Cell>

      <Cell>
        <LaptopIcon title="LaptopIcon" />
      </Cell>

      <Cell>
        <MeetIcon title="MeetIcon" />
      </Cell>

      <Cell>
        <MobileIcon title="MobileIcon" />
      </Cell>

      <Cell>
        <PeopleIcon title="PeopleIcon" />
      </Cell>
    </Row>
  </Box>
)
