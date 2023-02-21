import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'

import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import CountryLinks from './CountryLinks'
import BottomFooter from './BottomFooter'

const Footer = () => {
    return (
        <Box className="footer" sx={{}}>
            <Box sx={{ bgcolor: '#364759', width: '100%', height: 'auto' }}>
                <Button fullWidth variant='link' href='#top' sx={{ p: 1, textTransform: 'capitalize', fontWeight: 400, color: 'white' }}>
                    Back to top
                </Button>
            </Box>

            <NavLinks />

            <CountryLinks />

            <BottomFooter />
        </Box>
    )
}

export default Footer
