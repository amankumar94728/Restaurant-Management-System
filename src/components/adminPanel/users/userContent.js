import Navbar from "../dashboard/navbar";
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Utable from './userTable';
import SearchBar from './searchBar'

export default function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      // Fetch data from MongoDB using Axios
      axios.get('http://localhost:3001/api/v1/shops') // Replace '/api/users' with your actual backend API route
          .then(response => {
            //console.log('Data fetched successfully:', response.data);
              setUserData(response.data);// Assuming your API returns an array of user data
              console.log(userData);
              
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  },[] );
 
  useEffect(() => {
    // Log individual data items when userData changes
    userData.forEach(item => {
      console.log('Individual Data:', item);
    });
  }, [userData]);
    return (
      <React.Fragment>
        <Navbar />
        
        <CssBaseline />
        
        <Container fixed>
          <Box sx={{ bgcolor: '#fff', display:'flex',alignContent:'center',justifyContent:'center'  }} >
          <Card sx={{ minWidth: 800 }}>
        <CardContent>
          <SearchBar />
          <div style={{ textAlign: 'right', color: 'black',margin:'10px' }}>
          <Button variant="contained" disableElevation component={Link} to="#" sx={{ marginRight: 10}}>
                Search User
              </Button>
        <Button variant="contained" disableElevation component={Link} to="/Userreg">
                + ADD User
              </Button></div>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {/* <ul>
          {userData.map(user => (
                  <li key={user._id}>

                   <strong>Shop Name :</strong> {user.shopName}<br />
                    <strong>Name:</strong> {user.ownerName}<br />
                    <strong>Email:</strong> {user.email}<br />
                   
                  </li>
                ))}
</ul> */}
<Utable />
          </Typography>
          
          
         
        </CardContent>
 
      </Card>
              </Box>
              
        </Container>
        
      </React.Fragment>
    );
  }