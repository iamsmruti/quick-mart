import { Box, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { redShade } from '../../../../utils/constants'

import flatLogo from '../../../../assets/1.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const TopHeader = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', py: 0, borderBottom: '1px solid lightgrey', position: 'sticky', top: 0, zIndex: 100}}>
      <Container>
        <Stack direction={'row'} justifyContent={"space-between"} alignItems="center">
          <Link>
            <img height={"70px"} src={flatLogo} alt={'logo'} />
          </Link>
          <Stack direction={"row"}>
            <Link><Typography sx={{bgcolor: redShade, px: 2, py: 0.5, color: 'white', mr: 2}}>Login</Typography></Link>
            <Link><ShoppingCartIcon sx={{fontSize: '32px'}}/></Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default TopHeader