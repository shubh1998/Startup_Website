import AvatarIcon from '@components/ui-kit/Icons/iconComponents/AvatarIcon'
import {
  ClientReviewSectionHeading,
  ProcessContainer,
  ServicesSectionHeading,
  styles,
} from '@containers/Home/Home.styles'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const list = [
  {
    id: 1,
    name: 'Web Development',
    content:
      'Using cutting-edge technology, we work on the front-end and back-end of websites. Our developers deliver a website that works seamlessly on different browsers and interacts effectively with our clients audience.',
  },
  {
    id: 2,
    name: 'Graphic Designing',
    content:
      'We design graphics that can create a difference in the look and feel of our clients products and service offerings. Our creative graphics designers create graphics that are a kind of aesthetic appeal on the visual side',
  },
  {
    id: 3,
    name: 'App Development',
    content:
      'We have expert mobile app developers to develop unique Android and iOS apps that fit our client’s business needs. Our mobile apps are interactive that function seamlessly on their associated mobile app development platforms.',
  },
  {
    id: 4,
    name: 'Software Development',
    content:
      'Using cutting-edge name, we work on the front-end and back-end of websites. Our developers deliver a website that works seamlessly on different browsers and interacts effectively with our clients audience.',
  },
  {
    id: 5,
    name: 'Digital Marketing',
    content:
      'Using cutting-edge technology, we work on the front-end and back-end of websites. Our developers deliver a website that works seamlessly on different browsers and interacts effectively with our clients audience.',
  },
  {
    id: 6,
    name: 'QA Solutions',
    content:
      'Using cutting-edge technology, we work on the front-end and back-end of websites. Our developers deliver a website that works seamlessly on different browsers and interacts effectively with our clients audience.',
  },
]

const ProcessWeFollow = () => {
  return (
    <>
      <ClientReviewSectionHeading>
        <Typography sx={styles.headingStyle}>Process We Follow</Typography>
      </ClientReviewSectionHeading>
      <ServicesSectionHeading>
        <Typography sx={styles.subHeadingStyle}>
          We believe that just having a business website is not enough to build market value, but it
          should turn viewers into potential customers. This is where we mainly focus on. Tell us
          what you are looking for! We’d love to assist you!
        </Typography>
      </ServicesSectionHeading>
      <ProcessContainer>
        {list.map((item) => (
          <Grid container key={item.id} sx={styles.processCardStyle}>
            <Grid xs={12} md={4} style={styles.imageCardStyle}>
              <AvatarIcon />
              <Typography sx={styles.processNameStyle} gutterBottom>
                {item.name}
              </Typography>
            </Grid>
            <Grid xs={12} md={8} sx={{ margin: 'auto', padding: '5px' }}>
              <Typography sx={styles.processDescriptionStyle}>{item.content}</Typography>
            </Grid>
          </Grid>
        ))}
      </ProcessContainer>
    </>
  )
}

export default ProcessWeFollow
