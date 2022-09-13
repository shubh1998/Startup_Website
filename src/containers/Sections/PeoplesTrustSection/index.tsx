import PeopleIcon from '@components/ui-kit/Icons/iconComponents/PeopleIcon'
import { Typography } from '@mui/material'
import React from 'react'
import { Slide } from 'react-reveal'

const PeoplesTrustSection = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Typography
        sx={{ fontWeight: 800, fontSize: '28px', width: '100%', textAlign: 'center' }}
        gutterBottom
      >
        The People Trusted Us
      </Typography>
      <Slide bottom>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PeopleIcon />
        </div>
      </Slide>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '40%',
          margin: 'auto',
          marginTop: '15px',
        }}
      >
        <div>
          <Typography
            sx={{ fontWeight: 800, fontSize: '32px', width: '100%', textAlign: 'center' }}
            gutterBottom
          >
            5+
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              color: '#5b5b98',
              width: '100%',
              textAlign: 'center',
            }}
            gutterBottom
          >
            Experiance
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: 800, fontSize: '32px', width: '100%', textAlign: 'center' }}
            gutterBottom
          >
            10+
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              color: '#5b5b98',
              width: '100%',
              textAlign: 'center',
            }}
            gutterBottom
          >
            Projects Delivered
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: 800, fontSize: '32px', width: '100%', textAlign: 'center' }}
            gutterBottom
          >
            100+
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              color: '#5b5b98',
              width: '100%',
              textAlign: 'center',
            }}
            gutterBottom
          >
            Happy Clients
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default PeoplesTrustSection
