// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';





export default function BasicTable() {
    const [userData, setUserData] = useState([]);

  useEffect(() => {
      // Fetch data from MongoDB using Axios
      axios.get('http://localhost:3001/api/v1/customer') // Replace '/api/customer' with your actual backend API route
          .then(response => {
            console.log('Data fetched successfully:', response.data);

          
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell  scope="row" component={Link} to="/admin/customer/details">
                {row.shopName}
              </TableCell> */}
              
              <TableCell align="right" component={Link} to="/admin/customer/details">{row.fName}</TableCell>
              <TableCell align="right" component={Link} to="/admin/customer/details">{row.lName}</TableCell>
              <TableCell align="right" component={Link} to="/admin/customer/details">{row.email}</TableCell>
              <TableCell align="right" component={Link} to="/admin/customer/details">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}