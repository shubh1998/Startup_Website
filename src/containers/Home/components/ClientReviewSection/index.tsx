import AvatarIcon from '@components/ui-kit/Icons/iconComponents/AvatarIcon'
import DoubleQuotesIcon from '@components/ui-kit/Icons/iconComponents/DoubleQuotesIcon'
import {
  AvatarContainer,
  ClientReviewSectionHeading,
  DisplayFlexCenter,
  ReviewCard,
  styles,
  TextCenter,
} from '@containers/Home/Home.styles'
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
      <ClientReviewSectionHeading>
        <Typography sx={styles.headingStyle}>Our Clients Review</Typography>
      </ClientReviewSectionHeading>
      <Grid container sx={styles.reviewsContainer}>
        {allReviews.map((item) => (
          <Grid key={item.id} item xs={12} lg={4} sx={styles.reviewItemContainer}>
            <Fade left>
              <ReviewCard>
                <Card sx={styles.reviewCardStyle} elevation={10}>
                  <CardContent sx={{ mt: '80px', mb: '20px' }}>
                    <Typography sx={styles.clientNameStyle} gutterBottom>
                      Client
                    </Typography>
                    <Typography sx={styles.reviewDescriptionStyle}>{item.review}</Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'block' }}>
                    <TextCenter>
                      <DoubleQuotesIcon />
                      <br />
                      <Typography component={'div'} sx={{ color: colors.grey500 }}>
                        {item.clientName}
                      </Typography>
                    </TextCenter>
                  </CardActions>
                </Card>
                <AvatarContainer>
                  <DisplayFlexCenter>
                    <AvatarIcon />
                  </DisplayFlexCenter>
                </AvatarContainer>
              </ReviewCard>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ClientReviewSection
