import { styled } from '@mui/material'

export const ClientReviewSectionHeading = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3%',
}))

export const ReviewCard = styled('div')(() => ({
  position: 'relative',
  marginTop: '60px',
}))

export const AvatarContainer = styled('div')(() => ({
  position: 'absolute',
  top: -40,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
}))

export const DisplayFlexCenter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const TextCenter = styled('div')(() => ({
  textAlign: 'center',
}))

export const FormContainer = styled('div')(() => ({
  display: 'block',
  width: '60%',
  marginTop: '40px',
}))

export const BannerSectionRoot = styled('div')(() => ({
  position: 'absolute',
  top: '20vh',
  width: '100%',
}))

export const PeoplesSectionRoot = styled('div')(() => ({
  marginTop: '5%',
}))

export const PeoplesSectionContentContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: 'auto',
  marginTop: '15px',
}))

export const styles = {
  headingStyle: {
    fontSize: 32,
    fontWeight: 800,
    color: '#5b5b98',
  },
  reviewsContainer: {
    width: { xl: '70%', lg: '90%', xs: '100%' },
    margin: 'auto',
  },
  reviewItemContainer: {
    display: 'flex',
    justifyContent: { md: 'center', xs: 'center' },
  },
  reviewCardStyle: {
    width: 350,
    borderRadius: 2,
  },
  clientNameStyle: {
    fontWeight: 800,
    fontSize: '32px',
    width: '100%',
    textAlign: 'center',
  },
  reviewDescriptionStyle: {
    fontSize: '15px',
    width: '80%',
    color: 'gray',
    width: '100%',
    textAlign: 'center',
  },
  connectWithUsRoot: {
    width: { xl: '80%', lg: '90%', xs: '100%' },
    margin: '60px auto auto auto',
  },
  connectWithUsImage: {
    display: 'flex',
    justifyContent: { xs: 'center', lg: 'flex-start' },
  },
  formRoot: {
    display: { xs: 'flex', lg: 'block' },
    flexDirection: 'column',
    alignItems: { xs: 'center', lg: 'flex-start' },
  },
  formHeading: {
    fontWeight: 800,
    mt: '20px',
    fontSize: '28px',
    width: { xs: '60%', lg: '80%' },
    textAlign: 'left',
  },
  formBody: {
    fontWeight: 400,
    fontSize: '18px',
    width: '100%',
    width: { xs: '60%', lg: '70%' },
    textAlign: 'left',
    color: 'gray',
  },
  buttonStyle: {
    height: 40,
    mt: '10px',
    borderRadius: 8,
    width: 150,
    backgroundColor: '#5b5b98',
    color: 'white',
    '&:hover': {
      backgroundColor: 'purple',
    },
  },
  waveStyle: {
    height: '95vh',
    width: '100%',
    zIndex: 5,
    margin: 0,
    transform: 'rotate(180deg)',
    left: 0,
  },
  subHeadingBanner: {
    textAlign: 'left',
    fontSize: 16,
    width: '80%',
    color: 'gray',
  },
  laptopIconStyle: {
    mt: 10,
    display: { lg: 'flex', xs: 'none' },
    width: '100%',
    justifyContent: { xl: 'flex-end', xs: 'center' },
    alignItems: 'center',
  },
  bannerGridContainer: {
    mt: 0,
    pr: { xl: '15%', xs: '5%' },
    pl: { xl: '15%', xs: '5%' },
  },
  typedText: {
    fontWeight: 600,
    fontSize: 38,
    color: '#ffffff',
  },
  bannerContentStyle: {
    display: 'flex',
    justifyContent: { xl: 'flex-end', xs: 'center' },
    alignItems: 'center',
    mt: { lg: 0, xs: 15 },
  },
  knowYourBusinessRoot: {
    width: { xl: '80%', lg: '90%', xs: '100%' },
    margin: '60px auto auto auto',
  },
  listItemStyle: {
    display: 'list-item',
    fontWeight: 400,
    fontSize: '18px',
    width: '100%',
    textAlign: 'left',
    color: 'gray',
  },
  knowYourBusinessContainer: {
    paddingLeft: { xs: '5%', lg: '0%' },
  },
  businessHeading: {
    fontWeight: 800,
    mt: '20px',
    fontSize: '28px',
    width: '80%',
    textAlign: 'left',
  },
  peopleSectionHeading: {
    fontWeight: 800,
    fontSize: '28px',
    width: '100%',
    textAlign: 'center',
  },
  experienceNumberStyle: {
    fontWeight: 800,
    fontSize: '32px',
    width: '100%',
    textAlign: 'center',
  },
  experienceLabelStyle: {
    fontWeight: 400,
    fontSize: '16px',
    color: '#5b5b98',
    width: '100%',
    textAlign: 'center',
  },
}
