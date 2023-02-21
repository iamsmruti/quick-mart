import { Paper, Typography } from '@mui/material'
import React from 'react'
import { Stack } from 'react-bootstrap'

const ProductCard = () => {
  return (
    <Paper sx={{ mr: 2, p: 1, width: 250, display: 'inline-block' }}>
      <Stack >
        <img style={{width: '100%'}} src='https://petapixel.com/assets/uploads/2017/03/product1.jpeg'/>

        <Typography sx={{fontSize: '14px', mt: 1}}>Ground cracking shoes</Typography>
      </Stack>
    </Paper>
  )
}

export default ProductCard