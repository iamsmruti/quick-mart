import React from 'react'
import { Box } from '@mui/material'
import CarouselComp from '../components/CarouselComp'
import SideScroll from '../components/SideScroll'

const HomePage = () => {
  return (
    <Box>
      <CarouselComp />
      <SideScroll />
      <SideScroll />
      <SideScroll />
      <SideScroll />
    </Box>
  )
}

export default HomePage