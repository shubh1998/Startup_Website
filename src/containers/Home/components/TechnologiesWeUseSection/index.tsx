import { ClientReviewSectionHeading, styles } from '@containers/Home/Home.styles'
import CssIcon from '@mui/icons-material/Css'
import HtmlIcon from '@mui/icons-material/Html'
import { Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import TabPanelTech from './components/TabPanelTech'

const tabs = [
  {
    id: 0,
    type: 'Database',
  },
  {
    id: 1,
    type: 'Mobile',
  },
  {
    id: 2,
    type: 'FrontEnd',
  },
  {
    id: 3,
    type: 'Backend',
  },
]

const frontEndList = [
  {
    id: 1,
    name: 'AngularJs',
    icon: <HtmlIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 2,
    name: 'ReactJs',
    icon: <HtmlIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 3,
    name: 'VueJs',
    icon: <CssIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 4,
    name: 'HTML5',
    icon: <HtmlIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 5,
    name: 'Typejs',
    icon: <CssIcon sx={{ fontSize: 60 }} />,
  },
]

const BackendList = [
  {
    id: 1,
    name: 'NodeJs',
    icon: <HtmlIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 2,
    name: 'Ruby & Rails',
    icon: <HtmlIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 3,
    name: 'Python',
    icon: <CssIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 4,
    name: '.Net',
    icon: <HtmlIcon sx={{ fontSize: 60 }} />,
  },
  {
    id: 5,
    name: 'Java',
    icon: <CssIcon sx={{ fontSize: 60 }} />,
  },
]

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: '100%', backgroundColor: '#f9f9fc' }}
    >
      {value === index && <Box sx={{ m: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const TechnologiesWeUseSection = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <ClientReviewSectionHeading sx={{ mb: 5 }}>
        <Typography sx={styles.headingStyle}>Technologies We Use</Typography>
      </ClientReviewSectionHeading>
      <Box sx={styles.techContainer(matches)}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="secondary"
          >
            {tabs.map((item) => {
              return (
                <Tab
                  sx={{
                    color: 'black',
                    width: '25%',
                    fontWeight: '800',
                  }}
                  key={item.id}
                  label={item.type}
                  {...a11yProps(item.id)}
                />
              )
            })}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <TabPanelTech list={BackendList} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabPanelTech list={frontEndList} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabPanelTech list={frontEndList} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabPanelTech list={BackendList} />
        </TabPanel>
      </Box>
    </>
  )
}

export default TechnologiesWeUseSection
