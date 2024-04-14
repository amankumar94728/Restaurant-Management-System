import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; 
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function User(){
    const value = Cookies.get("User-Details")
    console.log(value);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from MongoDB using Axios
        axios.get('http://localhost:3001/api/v1/shops') // Replace '/api/users' with your actual backend API route
            .then(response => {
              console.log('Data fetched successfully:', response.data);
  
            
                setUserData(response.data);// Assuming your API returns an array of user data
                
                console.log(userData);
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
   
    useEffect(() => {
      // Log individual data items when userData changes
      userData.forEach(item => {
        console.log('Individual Data:', item);
      });
    }, [userData]);
    return(
       <>
        <h1>
        Welcome 
    </h1>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Shop Name</TableCell>
            <TableCell align="right">Owner Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  scope="row" component={Link} to={`/${value}`}>
                {row.shopName}
              </TableCell>
              
              <TableCell align="right">{row.ownerName}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
        

       </>
    );
}