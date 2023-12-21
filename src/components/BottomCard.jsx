import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Buttons from '../assets/Buttons';
import { TfiEmail } from 'react-icons/tfi';
import { HiOutlineCloud } from 'react-icons/hi2';
import { PiUserLight } from 'react-icons/pi';
import { FaCheckDouble } from 'react-icons/fa';

export default function BottomCard({topbtb, description, style, btnTxt, title, content }) {
  return (
    <Card sx={{ minWidth: 150, display:'flex', my:5, maxHeight:'170px', maxWidth:{md:440}}}>
      <CardContent>
        <Typography sx={{backgroundColor:style.buttonBgColor, borderRadius:50, display:'flex', alignItems:'center', justifyContent:'center'}} color="text.secondary" gutterBottom>
          {topbtb}
        </Typography>
        <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}}>
          {title}
        </Typography>
        <Typography variant='body2' fontSize={11}>
          {content}
        </Typography>
        <Buttons style={style} btnTxt={btnTxt}/>
      </CardContent>

      <CardContent >
      <Typography variant="subtitle2">
          What you'll get:
        </Typography>
        <Box sx={{ mt: 1, '& > *': { fontSize: 10 } }}>
          {description.dis1 && <Typography variant="body2">
            <PiUserLight style={{ marginRight: '8px' }} /> {description.dis1}
          </Typography>}
          {description.dis2 && <Typography variant="body2">
            <HiOutlineCloud style={{ marginRight: '8px' }} /> {description.dis2}
          </Typography>}
          {description.dis3 && <Typography variant="body2">
            <TfiEmail style={{ marginRight: '8px' }} /> {description.dis3}
          </Typography>}
         {description.dis4 && <Typography variant='body2' fontSize={10} mt={1}>
            <FaCheckDouble style={{ marginRight: '8px' }}/>
            {description.dis4}
        </Typography>}
        </Box>
      </CardContent>
    </Card>
  );
}