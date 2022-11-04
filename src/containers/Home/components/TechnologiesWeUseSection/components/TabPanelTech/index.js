import { styles, TechTabContainer, TechTiles } from '@containers/Home/Home.styles'
import { Typography } from '@mui/material'
import React from 'react'

const TabPanelTech = ({ list }) => {
  return (
    <TechTabContainer>
      {list.map((item) => (
        <TechTiles key={item.id}>
          {item.icon}
          <Typography sx={styles.techTextStyle}>{item.name}</Typography>
        </TechTiles>
      ))}
    </TechTabContainer>
  )
}

export default TabPanelTech
