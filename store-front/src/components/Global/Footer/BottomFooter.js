import { Box, Grid, Typography, Stack } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

import { Link } from 'react-router-dom'

const lists = [
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    },
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    },
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    },
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    },
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    },
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    },
    {
        title: "AbeBooks",
        line1: "Books, art",
        line2: "& collectibles"
    }
]

const BottomFooter = () => {
  return (
    <Box sx={{bgcolor: '#111a23', p: 4}}>
        <Container>
            <Grid container sx={{ml: 4, mr: 4}}> 
                {lists.map((item) => (
                    <Grid sx={{mb: 2}} key={item.title} item md={2.4}>
                        <Box sx={{'&:hover': {textDecoration: 'underline'}}}>
                            <Link to='/'>
                                <Typography sx={{color: 'white', fontWeight: 400, fontSize: '12px'}}>{item.title}</Typography>
                                <Typography sx={{color: '#939496', fontWeight: 400, fontSize: '10px'}}>{item.line1}</Typography>
                                <Typography sx={{color: '#939496', fontWeight: 400, fontSize: '10px'}}>{item.line2}</Typography>
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Stack sx={{ mt: 3}} direction={'row'} justifyContent={'center'}>
                <Typography sx={{fontSize: '14px', mr: 3, '&:hover': {textDecoration: 'underline'}}}><Link to='/'>Conditions of Use & Sale</Link></Typography>
                <Typography sx={{fontSize: '14px', mr: 3, '&:hover': {textDecoration: 'underline'}}}><Link to='/'>Privacy Notice</Link></Typography>
                <Typography sx={{fontSize: '14px', mr: 3, '&:hover': {textDecoration: 'underline'}}}><Link to='/'>Interest-based Ads</Link></Typography>
                <Typography sx={{fontSize: '14px'}}><Link to='/'>&#169; 1996-2022,Amazon.com, Inc. or its affiliates</Link></Typography>
            </Stack>
        </Container>
    </Box>
  )
}

export default BottomFooter
