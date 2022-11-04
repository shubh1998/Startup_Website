import AvatarIcon from '@components/ui-kit/Icons/iconComponents/AvatarIcon'
import {
  ClientReviewSectionHeading,
  DisplayFlexCenter,
  ReviewCard,
  ServicesSectionHeading,
  styles,
} from '@containers/Home/Home.styles'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'

const allReviews = [
  {
    id: 1,
    technology: 'IT Consultancy',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 2,
    technology: 'Web Development',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 3,
    technology: 'Digital Marketing',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 4,
    technology: 'IT Consultancy',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 5,
    technology: 'Web Development',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 6,
    technology: 'Digital Marketing',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
]

const OurServicesSection = () => {
  return (
    <>
      <ClientReviewSectionHeading>
        <Typography sx={styles.headingStyle}>Our Services</Typography>
      </ClientReviewSectionHeading>
      <ServicesSectionHeading>
        <Typography sx={styles.subHeadingStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus.
        </Typography>
      </ServicesSectionHeading>
      <Grid container sx={styles.reviewsContainer}>
        {allReviews.map((item) => (
          <Grid key={item.id} item xs={12} lg={4} sx={styles.reviewItemContainer}>
            <Fade left>
              <ReviewCard>
                <Card sx={styles.serviceCardStyle}>
                  <CardContent>
                    <DisplayFlexCenter>
                      <AvatarIcon />
                    </DisplayFlexCenter>
                    <Typography sx={styles.techNameStyle} gutterBottom>
                      {item.technology}
                    </Typography>
                    <Typography sx={styles.reviewDescriptionStyle}>{item.content}</Typography>
                  </CardContent>
                </Card>
              </ReviewCard>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default OurServicesSection
