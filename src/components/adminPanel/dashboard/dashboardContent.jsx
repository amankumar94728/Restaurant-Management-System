import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from "./navbar";;



export default function Content() {

  return (
   <>
   
    {/* <CssBaseline /> */}
    {/* <Navbar /> */}
      <Navbar />
      <Container >
        <Box sx={{ bgcolor: '#fff', display:'flex',alignContent:'center',justifyContent:'center' }} >
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* The Total Number of Users:<countDocuments /> */}
        </Typography>
       
        
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Box>
        
      </Container>
  
    
    
    </>

  );
}