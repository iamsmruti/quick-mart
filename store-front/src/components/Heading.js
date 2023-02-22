import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({title}) => {
  return (
    <Typography variant='h4' sx={{mt: 7, mb: 3}}>{title}</Typography>
  )
}

export default Heading