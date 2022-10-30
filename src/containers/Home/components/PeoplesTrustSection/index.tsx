import MediumPeopleIcon from '@components/ui-kit/Icons/iconComponents/MediumPeopleIcon'
import PeopleIcon from '@components/ui-kit/Icons/iconComponents/PeopleIcon'
import {
  DisplayFlexCenter,
  PeoplesSectionContentContainer,
  PeoplesSectionRoot,
  styles,
} from '@containers/Home/Home.styles'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Slide } from 'react-reveal'

const PeoplesTrustSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <PeoplesSectionRoot>
      <Typography sx={styles.peopleSectionHeading} gutterBottom>
        The People Trusted Us
      </Typography>
      <Slide bottom>
        <DisplayFlexCenter>{matches ? <PeopleIcon /> : <MediumPeopleIcon />}</DisplayFlexCenter>
      </Slide>
      <PeoplesSectionContentContainer>
        <div>
          <Typography sx={styles.experienceNumberStyle} gutterBottom>
            5+
          </Typography>
          <Typography sx={styles.experienceLabelStyle} gutterBottom>
            Experiance
          </Typography>
        </div>
        <div>
          <Typography sx={styles.experienceNumberStyle} gutterBottom>
            10+
          </Typography>
          <Typography sx={styles.experienceLabelStyle} gutterBottom>
            Projects Delivered
          </Typography>
        </div>
        <div>
          <Typography sx={styles.experienceNumberStyle} gutterBottom>
            100+
          </Typography>
          <Typography sx={styles.experienceLabelStyle} gutterBottom>
            Happy Clients
          </Typography>
        </div>
      </PeoplesSectionContentContainer>
    </PeoplesSectionRoot>
  )
}

export default PeoplesTrustSection
