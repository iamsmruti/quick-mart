import React from 'react'
import { Box, FormControl, MenuItem, Select, InputLabel } from '@mui/material'
import { Stack } from '@mui/system'

import logo from '../../assets/amazune.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        name: "Australia",
        url: '/'
    },
    {
        name: "Brazil",
        url: '/'
    },
    {
        name: "Cannada",
        url: '/'
    },
    {
        name: "China",
        url: '/'
    },
    {
        name: "France",
        url: '/'
    },
    {
        name: "Germany",
        url: '/'
    },
    {
        name: "Italy",
        url: '/'
    },
    {
        name: "Japan",
        url: '/'
    },
    {
        name: "Mexico",
        url: '/'
    },
    {
        name: "Netherlands",
        url: '/'
    },
    {
        name: "Poland",
        url: '/'
    },
    {
        name: "Singapore",
        url: '/'
    },
    {
        name: "Spain",
        url: '/'
    },
    {
        name: "United Arab Emirates",
        url: '/'
    },
    {
        name: "United Kingdom",
        url: '/'
    },
    {
        name: "United States",
        url: '/'
    }
]

const CountryLinks = () => {
    const [lang, setlang] = useState('english');

    const handleChange = (event) => {
        setlang(event.target.value);
    };
    return (
        <Box sx={{ bgcolor: '#242f3f', pt: 4, pb: 4 }}>
            <Stack direction={'row'} justifyContent={'center'}>
                <img style={{ width: '106px' }} src={logo} />
                <Box sx={{ minWidth: 120, border: '1px solid white', borderRadius: '5px', color: 'white', ml: 10 }}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            onChange={handleChange}
                            sx={{color: 'white'}}
                        >
                            <MenuItem value={'english'}>English-EN</MenuItem>
                            <MenuItem value={'hindi'}>Hindi-HI</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 3, width: '70%', ml: 'auto', mr: 'auto'}}>
                {links.map((link) => (
                    <Box sx={{mr: 2, fontSize: '12px'}}>
                        <Link to='/'>{link.name}</Link>
                    </Box>
                ))}
            </Box>  
        </Box>
    )
}

export default CountryLinks
