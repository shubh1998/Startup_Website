import ArrowIcon from '@components/ui-kit/Icons/iconComponents/ArrowIcon'
import { Grid, Typography } from '@mui/material'
import React from 'react'

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
      <Grid item xs={12} lg={4}>
        <div>
          <Typography
            variant="h4"
            sx={{
              color: '#ffffff',
              borderBottom: '1px solid #ED003F',
              width: '90%',
              cursor: 'pointer',
            }}
          >
            Logo
          </Typography>
        </div>
        <div style={{ paddingTop: '3%', display: 'flex', cursor: 'pointer' }}>
          <div>
            <ArrowIcon />
          </div>
          <div>
            <Typography sx={{ color: '#ffffff', paddingLeft: 4, cursor: 'pointer' }}>
              606-607, Princes Business Skypark, AB RD, LIG Colony, Indore, Madhya Pradesh, India.
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '5%', display: 'flex' }}>
          <div>
            <ArrowIcon />
          </div>
          <div>
            <Typography sx={{ color: '#ffffff', paddingLeft: 4, cursor: 'pointer' }}>
              MON TO FRI : 10:00AM - 06:00PM
            </Typography>
            <Typography sx={{ color: '#ffffff', paddingLeft: 4 }}>+123 54214 578 52</Typography>
          </div>
        </div>
        <div style={{ marginTop: '5%', display: 'flex' }}>
          <div>
            <ArrowIcon />
          </div>
          <div>
            <Typography sx={{ color: '#ffffff', paddingLeft: 4, cursor: 'pointer' }}>
              Social Networks
            </Typography>
            <Typography sx={{ color: '#ffffff', paddingLeft: 4, cursor: 'pointer' }}>
              Linkedin, facebook, instagram, twiiter
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          marginTop: { xs: '30px', lg: '0px' },
        }}
      >
        <div>
          <Typography
            variant="h4"
            sx={{
              color: '#ffffff',
              borderBottom: '1px solid #ED003F',
              width: '90%',
              cursor: 'pointer',
            }}
          >
            Quick Links
          </Typography>
        </div>
        <div style={{ paddingTop: '2%' }}>
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={{
                width: 'fit-content',
                color: '#ffffff',
                marginTop: '2%',
                marginBottom: '2%',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ED003F',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          marginTop: { xs: '30px', lg: '0px' },
        }}
      >
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
            <Typography
              key={item}
              sx={{
                width: 'fit-content',
                color: '#ffffff',
                marginTop: '2%',
                marginBottom: '2%',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ED003F',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </div>
      </Grid>
    </Grid>
  )
}

export default Footer
