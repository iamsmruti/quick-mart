import React from 'react'
import { Box } from '@mui/material'
import CarouselComp from '../components/CarouselComp'
import ProductPage from './ProductPage/ProductPage'

const HomePage = () => {
  return (
    <Box>
      <CarouselComp />
      <Box sx={{zIndex: 100, height: 'auto', mx: {md: 2, xs: 1}, transform: {md: 'translateY(-250px)', xs: 'translateY(-100px)'}}}>
        <ProductPage />
      </Box>
    </Box>
  )
}

export default HomePage