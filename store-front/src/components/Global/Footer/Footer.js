import React from 'react'
import { Box, Button } from '@mui/material'
import NavLinks from './NavLinks'
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
            <BottomFooter />
        </Box>
    )
}

export default Footer
