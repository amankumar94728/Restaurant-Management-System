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
import ShopCards from '../ShopCards/ShopCards';
import Image1 from '../../Static/Images/Shop_image.jpeg'
import { Padding } from '@mui/icons-material';

function Cards (shopData){
  console.log('shop Name : ',shopData.shopName);
  const name = shopData.shopName;
  return (
   
       <ShopCards
      title={name}
      location="Mantripukhri Imphal"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      datetime="September 14, 2016"
      photo={Image1}
      author='{author}'
      rating={3.5} // or any other rating value
      />
   
   
  );
}


export default function User(){
    const value = Cookies.get("User-Details")
    console.log(value);
    const [shopData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from MongoDB using Axios
        axios.get('http://localhost:3001/api/v1/shops') // Replace '/api/users' with your actual backend API route
            .then(response => {
              console.log('Data fetched successfully:', response.data);
                setUserData(response.data);// Assuming your API returns an array of user data
                console.log(shopData);
                shopData.forEach(item => {
                  console.log('Individual Data:', item);
                  
                });             
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
   
    useEffect(() => {
      // Log individual data items when userData changes
      shopData.forEach(item => {
        console.log('Individual Data:', item);
       
      });
    }, [shopData]);
return(
       <React.Fragment>
        <h1>
        Welcome 
    </h1>
    <hr></hr>

    <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Allow cards to wrap to the next line
  gap: '35px',
  padding: '25px',
  margin: '20px',
  flex: '0 0 calc(33.333%  )'
}}>

{shopData.map(shop => (
  
  <ShopCards
    key={shop._id}
    title={shop.shopName}
    location={shop.address}
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    datetime="September 14, 2016"
    photo={Image1}
    author={shop.ownerName}
    rating={3} // or any other rating value
  />
))}
  {/* <Cards style={{ flex: '0 0 calc(33.333%  )' }} />  */}
</div>

   
</React.Fragment>
    );
}