import { Button } from '@mui/material'
import React from 'react'
import { HiMiniArrowLongRight } from 'react-icons/hi2'

function Buttons({style,btnTxt}) {
  return (
    <Button
        variant='contained'
        sx={{
            textTransform: "capitalize",
            color:'black',
            height:style.btnHeigt,
            mb:1,
            backgroundColor:style.buttonBgColor
        }}>
            {btnTxt} <HiMiniArrowLongRight style={{marginLeft:'10px'}}/>
        </Button>
  )
}

export default Buttons
