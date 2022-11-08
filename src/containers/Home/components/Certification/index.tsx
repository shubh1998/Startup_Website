import AvatarIcon from '@components/ui-kit/Icons/iconComponents/AvatarIcon'
import {
  CertificateCard,
  ClientReviewSectionHeading,
  DisplayFlexCenter,
  styles,
} from '@containers/Home/Home.styles'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const list = [
  {
    id: 1,
    logo: <AvatarIcon />,
    name: 'Upwork',
    text: 'Find us on Goodfirms',
  },
  {
    id: 2,
    logo: <AvatarIcon />,
    name: 'Upwork',
    text: 'Find us on Goodfirms',
  },
  {
    id: 3,
    logo: <AvatarIcon />,
    name: 'Upwork',
    text: 'Find us on Goodfirms',
  },
  {
    id: 4,
    logo: <AvatarIcon />,
    name: 'Upwork',
    text: 'Find us on Goodfirms',
  },
  {
    id: 5,
    logo: <AvatarIcon />,
    name: 'Upwork',
    text: 'Find us on Goodfirms',
  },
]

const Certification = () => {
  return (
    <>
      <ClientReviewSectionHeading>
        <Typography sx={styles.headingStyle}>Certification & Recognition</Typography>
      </ClientReviewSectionHeading>
      <Grid container sx={styles.certificationItemContainer}>
        {list.map((item, index) => (
          <CertificateCard
            key={item.id}
            sx={{
              mt: {
                xs: '0px',
                xl: index % 2 !== 0 ? '50px' : '0px',
              },
            }}
          >
            <Card>
              <CardContent sx={styles.ceertificateCardStyle}>
                <DisplayFlexCenter>{item.logo}</DisplayFlexCenter>
                <Typography sx={styles.techNameStyle} gutterBottom>
                  {item.name}
                </Typography>
                <Typography sx={styles.descriptionStyle}>{item.text}</Typography>
              </CardContent>
            </Card>
          </CertificateCard>
        ))}
      </Grid>
    </>
  )
}

export default Certification
