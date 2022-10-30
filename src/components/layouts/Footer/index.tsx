import ArrowIcon from '@components/ui-kit/Icons/iconComponents/ArrowIcon'
import { Grid, Typography } from '@mui/material'
import React from 'react'

import { styles } from './Footer.styles'

const navItems = ['Home', 'Services', 'Technologies', 'Projects', 'Industry Solutions', 'About Us']
const services = [
  'Web Development',
  'App Development',
  'UI / UX Design',
  'Digital Marketing',
  'QA Solutions',
  'Software Development',
  'Cloud Solutions and Devops',
]

const Footer = () => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12} lg={4}>
        <div>
          <Typography variant="h4" sx={styles.footerHeading}>
            Logo
          </Typography>
        </div>
        <div style={styles.addressContainer}>
          <div>
            <ArrowIcon />
          </div>
          <Typography sx={styles.textStyle}>
            606-607, Princes Business Skypark, AB RD, LIG Colony, Indore, Madhya Pradesh, India.
          </Typography>
        </div>
        <div style={styles.flexContainer}>
          <div>
            <ArrowIcon />
          </div>
          <div>
            <Typography sx={styles.textStyle}>MON TO FRI : 10:00AM - 06:00PM</Typography>
            <Typography sx={styles.contactContainer}>+123 54214 578 52</Typography>
          </div>
        </div>
        <div style={styles.flexContainer}>
          <div>
            <ArrowIcon />
          </div>
          <div>
            <Typography sx={styles.textStyle}>Social Networks</Typography>
            <Typography sx={styles.textStyle}>Linkedin, facebook, instagram, twiiter</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ marginTop: { xs: '30px', lg: '0px' } }}>
        <Typography variant="h4" sx={styles.footerHeading}>
          Quick Links
        </Typography>
        <div style={styles.pt2}>
          {navItems.map((item) => (
            <Typography key={item} sx={styles.linksStyle}>
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ marginTop: { xs: '30px', lg: '0px' } }}>
        <Typography variant="h4" sx={styles.footerHeading}>
          Services
        </Typography>
        <div style={styles.pt2}>
          {services.map((item) => (
            <Typography key={item} sx={styles.linksStyle}>
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
    </Grid>
  )
}

export default Footer
