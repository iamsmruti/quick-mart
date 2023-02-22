import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Heading from '../../components/Heading'
import CustomStepper from './components/Stepper'
import data from '../../utils/data.json'

const Cart = () => {
  console.log(data)
  return (
    <Box>
      <CustomStepper />
      <Container>
        <Heading title={"Shopping Cart"} />
        <Stack sx={{ borderRadius: '10px', border: '1px solid #DEDEDE', mb: 4 }}>
          <Grid container sx={{ py: 2, px: 3 }}>
            <Grid item md={5} xs={4}>
              <Typography>Product</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography>Name</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography>Description</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography>Price</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ bgcolor: 'darkgrey' }} />

          {data.products.map((product) => (
            <>
              <Grid container sx={{ py: 2, px: 3 }}>
                <Grid item md={5}>
                  <img src={product.imageUrl} />
                </Grid>
                <Grid item md={2}>
                  <Typography>{product.name}</Typography>
                </Grid>
                <Grid item md={3}>
                  <Typography>{product.desc}</Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography>₹ {product.price}</Typography>
                </Grid>
              </Grid>
              <Divider sx={{ bgcolor: 'darkgrey' }} />
            </>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Cart