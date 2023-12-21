import React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Divider, Stack } from '@mui/material';
import { PiUserLight } from "react-icons/pi";
import { HiMiniArrowLongRight, HiOutlineCloud } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import Buttons from '../assets/Buttons';

 export default function Cards({ title, oldPrice, newPrice, description, style, btnTxt}) {
  return (
    <Card sx={{ minWidth: {md:275, xs:200}, maxHeight:'259px'}}>
      <CardContent sx={{display:{sm:'flex', md:'block'}, alignItems:'center', justifyContent:'space-between'}}>
        <div>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }} gutterBottom>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ position: "relative" }}>
          $: {oldPrice}
          <Stack component='span'
            sx={{
              position: "absolute",
              left: 0,
              top: "34%",
              width:{sm:"70%",xs:'25%', md:"35%"},
              height: "1px",
              backgroundColor: "red",
              content: "''",
              transform: "rotate(6deg)",
              transformOrigin: "0 23%",
            }}
            
          />
        </Typography>
        <Typography variant="h5" component="div">
          $: {newPrice}
        </Typography>
        <Buttons style={style} btnTxt={btnTxt}/>
        </div>
        <Divider/>
        <div>
        <Typography variant="subtitle2">
          What you'll get:
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            <PiUserLight style={{ marginRight: '8px' }} /> {description.dis1}
          </Typography>
          <Typography variant="body2">
            <HiOutlineCloud style={{ marginRight: '8px' }} /> {description.dis2}
          </Typography>
          <Typography variant="body2">
            <TfiEmail style={{ marginRight: '8px' }} /> {description.dis3}
          </Typography>
        </Box>
        <Button sx={{ color: 'black', textDecoration: "underline" }} size="small">Explore Features</Button>
        </div>
      </CardContent>
    </Card>
  );
}
