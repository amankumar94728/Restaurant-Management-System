import Sheet from '@mui/joy/Sheet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserDetail() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB using Axios
    axios.get('http://localhost:3001/api/v1/customer') 
      .then(response => {
        // console.log('Data fetched successfully:', response.data);
        setUserData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },);

  return (
    <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
      {userData.map((row, index) => (
        <div key={index}> {/* Adding a unique key for each mapped element */}
          <p>First Name : {row.fName}</p>
          <p>Last Name: {row.lName}</p>
          <p>Email id : {row.email}</p>
          <p>Role :{row.role}</p>

        </div>
      ))}
    </Sheet>
  );
}
