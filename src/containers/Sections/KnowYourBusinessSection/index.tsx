import ChartsIcon from '@components/ui-kit/Icons/iconComponents/ChartsIcon'
import MeetIcon from '@components/ui-kit/Icons/iconComponents/MeetIcon'
import { Button, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'

const KnowYourBusinessSection = () => {
  return (
    <>
      <Grid
        container
        sx={{ width: { xl: '80%', lg: '90%', xs: '100%' }, margin: '60px auto auto auto' }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'left', lg: 'flex-start' },
            paddingLeft: { xs: '5%', lg: '0%' },
          }}
        >
          <Fade left>
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
              Know Your Business Find Beetter Solutions
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
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}
        >
          <Fade right>
            <MeetIcon />
          </Fade>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ width: { xl: '80%', lg: '90%', xs: '100%' }, margin: '60px auto auto auto' }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          id="desktop-image"
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <Fade top>
            <ChartsIcon />
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            paddingLeft: { xs: '5%', lg: '0%' },
          }}
        >
          <Fade bottom>
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
          </Fade>
        </Grid>
      </Grid>
    </>
  )
}

export default KnowYourBusinessSection
