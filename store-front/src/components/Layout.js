import { Stack } from '@mui/system'
import React from 'react'
import Footer from './Global/Footer/Footer'
import Header from './Global/Header/Header'

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