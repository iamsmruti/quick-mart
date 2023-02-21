import { Stack } from '@mui/system'
import React from 'react'
import Footer from './Footer/Footer'
import Header from './Global/Header'

const Layout = ({children}) => {
  return (
    <Stack>
        <Header />
        {children}
        <Footer />
    </Stack>
  )
}

export default Layout