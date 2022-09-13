import AvatarIcon from '@components/ui-kit/Icons/iconComponents/AvatarIcon'
import DoubleQuotesIcon from '@components/ui-kit/Icons/iconComponents/DoubleQuotesIcon'
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { colors } from '@theme/colors'
import React from 'react'
import { Fade } from 'react-reveal'

const allReviews = [
  {
    id: 1,
    clientName: 'Liona Moresa',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    clientName: 'Liona Moresa',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    clientName: 'Liona Moresa',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const ClientReviewSection = () => {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 800,
            color: '#5b5b98',
          }}
        >
          Our Clients Review
        </Typography>
      </div>
      <Grid container sx={{ width: { xl: '70%', lg: '90%', xs: '100%' }, margin: 'auto' }}>
        {allReviews.map((item) => (
          <Grid
            key={item.id}
            item
            xs={6}
            md={4}
            sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-end' } }}
          >
            <Fade left>
              <div style={{ position: 'relative', marginTop: '60px' }}>
                <Card sx={{ width: 350, borderRadius: 2 }} elevation={10}>
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
                      Client
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
                      {item.review}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'block' }}>
                    <div style={{ textAlign: 'center' }}>
                      <DoubleQuotesIcon />
                      <br />
                      <div>
                        <Typography sx={{ color: colors.grey500 }}>{item.clientName}</Typography>
                      </div>
                    </div>
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
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <AvatarIcon />
                  </div>
                </div>
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ClientReviewSection
