import { ClientReviewSectionHeading, styles } from '@containers/Home/Home.styles'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import ReactPlayer from 'react-player'

const allReviews = [
  {
    id: 1,
    link: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    content:
      'By far the best group I have found on Upwork as far as website building  was always spot on and they delivered exactly what I wanted! I am so thankful and I will be using them on any project going forward. I highly highly recommend you give them a shot before you waste money on someone else. The whole team is awesome! By far the best group I have found on Upwork as far as website building. communication was always spot on and they delivered exactly what I wanted! I am so thankful and I will',
    name: 'Luis Philip',
    designation: 'CEO Founder Comapny',
  },
  {
    id: 2,
    link: 'https://www.youtube.com/watch?v=eBKcGAhkZUI',
    content:
      'By far the best group I have found on Upwork as far as website building  was always spot on and they delivered exactly what I wanted! I am so thankful and I will be using them on any project going forward. I highly highly recommend you give them a shot before you waste money on someone else. The whole team is awesome! By far the best group I have found on Upwork as far as website building. communication was always spot on and they delivered exactly what I wanted! I am so thankful and I will',
    name: 'Neew Philip',
    designation: 'CEO Founder Comapny',
  },
]

const OurClientRecommendation = () => {
  return (
    <>
      <ClientReviewSectionHeading>
        <Typography sx={styles.headingStyle}>Our Client Recommendations</Typography>
      </ClientReviewSectionHeading>
      <Carousel
        showEmptySlots={false}
        enableAutoPlay={true}
        style={{ width: '98%', margin: 'auto' }}
      >
        {allReviews.map((item) => {
          return (
            <Grid key={item.id} container sx={styles.clientRecommendContainer}>
              <Grid item xs={12} md={4} sx={styles.videoContainer}>
                <ReactPlayer
                  style={{
                    borderRadius: '0.25rem',
                  }}
                  url={item.link}
                  width="450px"
                  height="300px"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  paddingTop: '20px',
                  paddingLeft: '20px',
                }}
              >
                <Typography sx={styles.clientRecommendationTextStyle}>{item.content}</Typography>
                <Typography sx={styles.clientNameTextStyle}>{item.name}</Typography>
                <Typography sx={styles.clientRecommendationTextStyle}>
                  {item.designation}
                </Typography>
              </Grid>
            </Grid>
          )
        })}
      </Carousel>
    </>
  )
}

export default OurClientRecommendation
