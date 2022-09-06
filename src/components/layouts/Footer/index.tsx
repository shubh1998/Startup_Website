import { Grid, Typography } from '@mui/material'
import React from 'react'

import Features from '../../../assets/images/feat.svg'

const Footer = () => {
  const navItems = [
    'Home',
    'Services',
    'Technologies',
    'Projects',
    'Industry Solutions',
    'About Us',
  ]
  const services = [
    'Web Development',
    'App Development',
    'UI / UX Design',
    'Digital Marketing',
    'QA Solutions',
    'Software Development',
    'Cloud Solutions and Devops',
  ]

  return (
    <Grid
      container
      sx={{
        height: '100%',
        backgroundColor: '#212529',
        marginTop: 10,
        paddingTop: '2%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '5%',
      }}
    >
      <Grid item lg={4}>
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#ffffff', borderBottom: '1px solid #ED003F', width: '90%' }}
          >
            Logo
          </Typography>
        </div>
        <div style={{ paddingTop: '3%', display: 'flex' }}>
          <div>
            <Features />
          </div>
          <div>
            <Typography style={{ color: '#ffffff', marginLeft: 10, width: 300 }}>
              606-607, Princes Business Skypark, AB RD, LIG Colony, Indore, Madhya Pradesh, India.
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '5%', display: 'flex' }}>
          <div>
            <Features />
          </div>
          <div>
            <Typography style={{ color: '#ffffff', marginLeft: 10, width: 300 }}>
              MON TO FRI : 10:00AM - 06:00PM
            </Typography>
            <Typography style={{ color: '#ffffff', marginLeft: 10, width: 300 }}>
              +123 54214 578 52
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '5%', display: 'flex' }}>
          <div>
            <Features />
          </div>
          <div>
            <Typography style={{ color: '#ffffff', marginLeft: 10, width: 300 }}>
              Social Networks
            </Typography>
            <Typography style={{ color: '#ffffff', marginLeft: 10, width: 300 }}>
              Linkedin, facebook, instagram, twiiter
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item lg={4}>
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#ffffff', borderBottom: '1px solid #ED003F', width: '90%' }}
          >
            Quick Links
          </Typography>
        </div>
        <div style={{ paddingTop: '2%' }}>
          {navItems.map((item) => (
            <Typography key={item} style={{ color: '#ffffff' }}>
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
      <Grid item lg={4}>
        <div>
          <Typography
            variant="h4"
            sx={{ color: '#ffffff', borderBottom: '1px solid #ED003F', width: '90%' }}
          >
            Services
          </Typography>
        </div>
        <div style={{ paddingTop: '2%' }}>
          {services.map((item) => (
            <Typography key={item} style={{ color: '#ffffff' }}>
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
    </Grid>
  )
}

export default Footer
