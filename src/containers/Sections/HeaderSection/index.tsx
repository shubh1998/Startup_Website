import Navbar from '@components/layouts/Navbar'
import LaptopIcon from '@components/ui-kit/Icons/iconComponents/LaptopIcon'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactTyped from 'react-typed'
import Wave from 'react-wavify'

const HeaderSection = () => {
  return (
    <>
      <Navbar />
      <Wave
        style={{
          height: '95vh',
          zIndex: 5,
          margin: 0,
          transform: 'rotate(180deg)',
          left: 0,
        }}
        fill="#140a42"
        paused={false}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.4,
          points: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20vh',
          width: '100%',
        }}
      >
        <Grid
          container
          sx={{
            // border: '1px solid black',
            mt: 0,
            pr: { xl: '15%', xs: '5%' },
            pl: { xl: '15%', xs: '5%' },
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              // border: '1px solid black',
              // mt: 10,
              display: 'flex',
              justifyContent: { xl: 'flex-end', xs: 'center' },
              alignItems: 'center',
              // pr: '15%',
              // pl: '15%',
            }}
          >
            <div>
              <div
                style={{
                  textAlign: 'left',
                  fontWeight: 600,
                  fontSize: 38,
                  color: '#ffffff',
                }}
              >
                <ReactTyped
                  strings={[
                    'We are a team of Developers, Designers, Innovators...',
                    'We Provide Secure IT Solutions for a More Secure Environment!',
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop
                />
              </div>
              <Typography
                sx={{
                  textAlign: 'left',
                  fontSize: 16,
                  width: '80%',
                  color: 'gray',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>

              <Button
                sx={{
                  height: 40,
                  mt: '10px',
                  borderRadius: 8,
                  width: 150,
                  backgroundColor: '#5b5b98',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'purple',
                  },
                }}
                variant="contained"
              >
                Contact Us
              </Button>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              // border: '1px solid black',
              mt: 10,
              display: 'flex',
              width: '100%',
              justifyContent: { xl: 'flex-end', xs: 'center' },
              alignItems: 'center',
            }}
          >
            <LaptopIcon />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default HeaderSection
