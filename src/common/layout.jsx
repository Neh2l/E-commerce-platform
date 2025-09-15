import React from 'react'
import Header1 from './header1'
import { Outlet } from 'react-router'
import Footer from './footer'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header1/>
      <Box flex={1}>
        <Outlet/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Layout
