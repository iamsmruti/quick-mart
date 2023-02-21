import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'

import { Link } from 'react-router-dom'

const lists = [
    {
        title: "Get to Know Us",
        links: [
            {
                name: "About Us",
                url: "/"
            },
            {
                name: "Careers",
                url: "/"
            },
            {
                name: "Press Releases",
                url: "/"
            },
            {
                name: "Amazon Cares",
                url: "/"
            },
            {
                name: "Gift a Smile",
                url: "/"
            },
            {
                name: "Amazon Science",
                url: "/"
            },
        ]
    },
    {
        title: "Connect With Us",
        links: [
            {
                name: "Facebook",
                url: "/"
            },
            {
                name: "Twitter",
                url: "/"
            },
            {
                name: "Instagram",
                url: "/"
            }
        ]
    },
    {
        title: "Make Money with Us",
        links: [
            {
                name: "Sell on Amazon",
                url: "/"
            },
            {
                name: "Sell under Amazon Accelerator",
                url: "/"
            },
            {
                name: "Amazon Global Selling",
                url: "/"
            },
            {
                name: "Become an Affiliate",
                url: "/"
            },
            {
                name: "Fullfilment By Amazon",
                url: "/"
            },
            {
                name: "Advertise Your Products",
                url: "/"
            },
            {
                name: "Amazon Pay on Merchants",
                url: "/"
            },
        ]
    },
    {
        title: "Let Us Help You",
        links: [
            {
                name: "COVID-19 and Amazon",
                url: "/"
            },
            {
                name: "Your Account",
                url: "/"
            },
            {
                name: "Returns Centre",
                url: "/"
            },
            {
                name: "100% Purchase Protection",
                url: "/"
            },
            {
                name: "Amazon App Download",
                url: "/"
            },
            {
                name: "Amazon Assistant Download",
                url: "/"
            },
            {
                name: "Help",
                url: "/"
            },
        ]
    }
]

const NavLinks = () => {
    return (
        <Box sx={{ bgcolor: '#242f3f', pt: 5, pb: 5, borderBottom: '1px solid #394653' }}>
            <Container>
                <Grid container sx={{ ml: 5, mr: 5 }}>
                    {lists.map((list) => (
                        <Grid item md={3} xs={12}>
                            <Box>
                                <Typography variant='h6' fontSize={18} sx={{ fontWeight: 500, color: 'white', mb: 0.7 }}>{list.title}</Typography>
                                {list.links.map((item) => (
                                    <Box sx={{ fontSize: '14px', mb: 1 }}>
                                        <Link to={item.url} >{item.name}</Link>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default NavLinks
