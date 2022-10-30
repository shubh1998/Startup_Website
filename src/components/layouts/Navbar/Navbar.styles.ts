import { styled } from '@mui/material'

const drawerWidth = 240

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const styles = {
  appBarRoot: {
    backgroundColor: '#140a42',
    boxShadow: 'none',
    height: 85,
    color: 'black',
    pt: '10px',
    pr: { xs: '2%', lg: '8%' },
    pl: { xs: '2%', lg: '8%' },
  },
  logoText: {
    flexGrow: 1,
    color: '#ffffff',
    fontWeight: 800,
    textAlign: { xs: 'start', lg: 'start' },
  },
  hamIconContainer: {
    color: 'white',
    display: { xs: 'block', lg: 'none' },
  },
  navItemStyle: {
    color: '#ffffff',
    fontWeight: 550,
    textTransform: 'capitalize',
    height: 72,
    '&:hover': {
      borderBottom: '3px solid #ED003F',
      borderRadius: 0,
    },
  },
  buttonStyle: {
    height: 40,
    borderRadius: 8,
    width: 160,
    backgroundColor: '#ED003F',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'purple',
    },
  },
  drawerRoot: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  },
}
