import React from 'react';
import Cards from './Cards';
import { Box, Typography, Grid } from '@mui/material';
import ButtonToggler from './ButtonToggler';
import BottomCard from './BottomCard';

const planes = [
  {
    title: 'Basic',
    oldPrice: '89.99/mo',
    newPrice: '9.99/mo',
    description: {
      dis1: 'Upto 25 Users',
      dis2: 'Upto 25gb Storage',
      dis3: 'Email Support',
    },
    style: {
      buttonBgColor: 'antiquewhite',
      btnHeigt: '20px',
    },
    btnTxt: 'Get start',
  },
  {
    title: 'Standard',
    oldPrice: '189.99/mo',
    newPrice: '99.99/mo',
    description: {
      dis1: 'Upto 50 Users',
      dis2: 'Upto 60gb Storage',
      dis3: 'Email + Chat Support',
    },
    style: {
      buttonBgColor: 'lightpink',
      btnHeigt: '20px',
    },
    btnTxt: 'Get start',
  },
  {
    title: 'Premium',
    oldPrice: '389.99/mo',
    newPrice: '199.99/mo',
    description: {
      dis1: 'Upto 75 Users',
      dis2: 'Upto 100gb Storage',
      dis3: 'Email + Chat + Whatsapp Support',
    },
    style: {
      buttonBgColor: 'violet',
      btnHeigt: '20px',
    },
    btnTxt: 'Get start',
  },
];

const bottomCard = [
  {
    topbtb: 'Free for ever',
    title: 'Free Starter',
    content: 'The quickest and easiest way to try protocoles with basic fuctionalities',
    description: {
      dis1: 'Upto 8 Users',
      dis2: 'Upto 3gb Storage',
      dis3: 'Email Support',
      dis4: 'The quickest and easiest way to try protocoles with basic fuctionalities',
    },
    style: {
      buttonBgColor: 'lightgreen',
      btnHeigt: '30px',
    },
    btnTxt: 'Get start',
  },
  {
    topbtb: 'Letus connect',
    title: 'Enterprice plan',
    content: 'Effortlessly costomize and fine - tune services as your needs to shift ensuring the perfect tools for success',
    description: {
      dis1: 'Morthan 75 Users',
      dis4: 'Costemisation for all other users',
    },
    style: {
      buttonBgColor: 'darkturquoise',
      btnHeigt: '30px',
    },
    btnTxt: 'Contact us',
  },
];

function Home() {
    return (
      <Grid >
        <Box
          sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', py: 4, display:{xs:'none', md:'flex'} }}>
            Choose a plan that's just right for you!
          </Typography>
          <ButtonToggler />
        </Box>
        <Grid container spacing={3} mt={2}>
          {planes.map((data, index) => (
            <Grid item xs={12}  md={6} lg={4} key={index}>
              <Cards {...data} />
            </Grid>
          ))}
        </Grid>
        
        <Grid container spacing={3}>
          {bottomCard.map((data) => (
              <Grid item xs={12} md={6} key={data.title}>
            <BottomCard {...data} />
          </Grid>
          ))}
          </Grid>
          <Box
          sx={{
            display:{md: 'flex', xs:'none'},
            justifyContent: 'end',
            pb:1
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize:8, color:'blue' }}>
           *Some unique features are provided as add-ons with individual plans for each featurs
          </Typography>
        </Box>
      </Grid>
    );
  }

export default Home;
