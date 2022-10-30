import ChartsIcon from '@components/ui-kit/Icons/iconComponents/ChartsIcon'
import MediumChartsIcon from '@components/ui-kit/Icons/iconComponents/MediumChartsIcon'
import MediumMeetIcon from '@components/ui-kit/Icons/iconComponents/MediumMeetIcon'
import MeetIcon from '@components/ui-kit/Icons/iconComponents/MeetIcon'
import { styles } from '@containers/Home/Home.styles'
import { Grid, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'

const KnowYourBusinessSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <Grid container sx={styles.knowYourBusinessRoot}>
        <Grid item xs={12} lg={6} sx={styles.knowYourBusinessContainer}>
          <Fade left>
            <Typography sx={styles.businessHeading} gutterBottom>
              Know Your Business Find Better Solutions
            </Typography>
            <List>
              <ListItem disablePadding>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mt: '10px' }}>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mt: '10px' }}>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mt: '10px' }}>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
            </List>
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}
        >
          <Fade right>{matches ? <MeetIcon /> : <MediumMeetIcon />}</Fade>
        </Grid>
      </Grid>
      <Grid container sx={styles.knowYourBusinessRoot}>
        <Grid
          item
          xs={12}
          lg={6}
          id="desktop-image"
          sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}
        >
          <Fade top>{matches ? <ChartsIcon /> : <MediumChartsIcon />}</Fade>
        </Grid>
        <Grid item xs={12} lg={6} sx={styles.knowYourBusinessContainer}>
          <Fade bottom>
            <Typography sx={styles.businessHeading} gutterBottom>
              Know Your Business Find Better Solutions
            </Typography>
            <List>
              <ListItem disablePadding>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mt: '10px' }}>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mt: '10px' }}>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mt: '10px' }}>
                <Typography sx={styles.listItemStyle} gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus.
                </Typography>
              </ListItem>
            </List>
          </Fade>
        </Grid>
      </Grid>
    </>
  )
}

export default KnowYourBusinessSection
