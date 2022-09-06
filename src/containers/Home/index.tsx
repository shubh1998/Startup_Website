import Footer from '@components/layouts/Footer'
import Navbar from '@components/layouts/Navbar'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { Fade } from 'react-reveal'
import Typed from 'react-typed'
import Wave from 'react-wavify'

import Features from '../../assets/images/feat.svg'
import MeetIcon from '../../assets/images/image1.svg'
import PeopleIcon from '../../assets/images/image2.svg'
import ChartsIcon from '../../assets/images/image3.svg'
import LaptopIcon from '../../assets/images/laptop.svg'
import MobileIcon from '../../assets/images/mobile.svg'

const FeatureItem = ({ color }) => {
  return (
    <div style={{ position: 'relative', marginTop: '60px' }}>
      <Card sx={{ width: '283px', borderRadius: 2 }} elevation={10}>
        <CardContent
          sx={{
            mt: '80px',
            mb: '20px',
          }}
        >
          <Typography
            sx={{ fontWeight: 800, fontSize: '32px', width: '100%', textAlign: 'center' }}
            gutterBottom
          >
            Lets See Features
          </Typography>
          <Typography
            sx={{
              fontSize: '15px',
              width: '80%',
              color: 'gray',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton>
            <Features />
          </IconButton>
        </CardActions>
      </Card>
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            background: color,
            border: `3px solid ${color}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Features />
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
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
                <Typed
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
      <>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
          <Typography
            sx={{
              // textAlign: 'left',
              fontSize: 22,
              fontWeight: 800,
              // width: '80%',
              color: '#5b5b98',
            }}
          >
            Lets See Features
          </Typography>
        </div>
        <Grid container sx={{ width: { xl: '70%', lg: '90%', xs: '100%' }, margin: 'auto' }}>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-end' } }}
          >
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }}
          >
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-end' } }}
          >
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: { xs: 'flex', lg: 'none' },
              // mt: '140px',
              justifyContent: { md: 'center', xs: 'flex-start' },
            }}
          >
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: 'flex', lg: 'none' },
              // mt: '140px',
              justifyContent: { xs: 'center' },
            }}
          >
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            width: { xl: '40%', lg: '70%' },
            display: { xs: 'none', lg: 'flex' },
            margin: 'auto auto auto auto',
          }}
        >
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Fade left>
              <FeatureItem color="#5b5b98" />
            </Fade>
          </Grid>
        </Grid>
      </>
      <Grid
        container
        sx={{ width: { xl: '80%', lg: '90%', xs: '100%' }, margin: '60px auto auto auto' }}
      >
        <Grid item xs={6}>
          <Typography
            sx={{ fontWeight: 800, mt: '20px', fontSize: '28px', width: '80%', textAlign: 'left' }}
            gutterBottom
          >
            Know Your Bussiness Find Beetter Solutions
          </Typography>
          <List>
            <ListItem disablePadding>
              <Typography
                sx={{
                  display: 'list-item',
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  display: 'list-item',
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
          </List>
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
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <MeetIcon />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ width: { xl: '80%', lg: '90%', xs: '100%' }, margin: '60px auto auto auto' }}
      >
        <Grid item xs={6}>
          <ChartsIcon />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ fontWeight: 800, mt: '20px', fontSize: '28px', width: '80%', textAlign: 'left' }}
            gutterBottom
          >
            Know Your Bussiness Find Beetter Solutions
          </Typography>
          <List>
            <ListItem disablePadding>
              <Typography
                sx={{
                  display: 'list-item',
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  display: 'list-item',
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ mt: '10px' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '100%',
                  textAlign: 'left',
                  color: 'gray',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>
            </ListItem>
          </List>
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
        </Grid>
      </Grid>
      <div style={{ marginTop: '30px' }}>
        <Typography
          sx={{ fontWeight: 800, fontSize: '28px', width: '100%', textAlign: 'center' }}
          gutterBottom
        >
          The People Trusted Us
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PeopleIcon />
        </div>
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
        <Grid
          container
          sx={{ width: { xl: '80%', lg: '90%', xs: '100%' }, margin: '60px auto auto auto' }}
        >
          <Grid item xs={6}>
            <MobileIcon />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontWeight: 800,
                mt: '20px',
                fontSize: '28px',
                width: '80%',
                textAlign: 'left',
              }}
              gutterBottom
            >
              Connect With Us
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                width: '100%',
                width: '70%',
                textAlign: 'left',
                color: 'gray',
              }}
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus.
            </Typography>
            <div style={{ display: 'block', width: '60%', marginTop: '40px' }}>
              <TextField required fullWidth id="outlined-required" defaultValue="Hello World" />
              <TextField
                sx={{ mt: '20px' }}
                required
                fullWidth
                id="outlined-required"
                defaultValue="Hello World"
              />
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
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  )
}

export default Home
