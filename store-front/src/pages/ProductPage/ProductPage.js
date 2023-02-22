import React from 'react'
import { Box, Grid, Paper } from '@mui/material'
import Filter from './components/Filter'
import { bgcolor } from '@mui/system'
import data from '../../utils/data.json'

const ProductPage = () => {
  return (
    <Box sx={{bgcolor: 'white', px: 2, py: 0.5, pb: 3 }}>
      <Filter />
      <Grid container>
        {data.products.map((product) => (
          <Grid item md={3} xs={6} sx={{px: 1, py: 1}}>
            <Paper sx={{display: 'flex', flexDirection: 'column'}}>
              <img width={"100%"} style={{height: '250px', objectFit: 'cover', objectPosition: 'center'}} src={product.imageUrl} />
              <Box sx={{p: 1}}>
                <Box sx={{fontSize: 14, fontWeight: 600, mb: 1}}>{product.name}</Box>
                <Box sx={{fontSize: 12, fontWeight: 400, mb: 1}}>{product.desc}</Box>
                <Box sx={{fontSize: 12, fontWeight: 400, mb: 1}}>{product.price}</Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductPage