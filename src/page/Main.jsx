import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Cards from '../components/Cards'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import Home from '../components/Home'
import RightBar from '../components/RightBar'

function Main() {
  return (
      <Box >
        <TopBar/>
        <Box sx={{display:'flex'}}>
          <Box sx={{width: { xs: "100%" ,md:"17%"}, display:{xs:"none", md:'flex'}}}>
          <SideBar/>
          </Box>
          <Box sx={{mx:3, zIndex:-1}}>
          <Home/>
          </Box>
          <Box sx={{ml:'auto', display:{xs:"none", md:'flex'}}}>
          <RightBar/>
          </Box>
        </Box>
      </Box>
  )
}

export default Main
