import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

const MenuDisplay = () => {
  const [menuItems, setMenuItems] = useState([]);
  function bufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  
  useEffect(() => {
    // Fetch menu items from your backend API
    axios.get('http://localhost:3001/api/v1/menuitems/menu-items')
      .then(response => {
        console.log(response.data);
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  return (
    <div>
      {menuItems.map(menuItem => (
        <ActionAreaCard
          key={menuItem._id}
          name={menuItem.name}
          price={menuItem.price}
          description={menuItem.description}
          image={`data:${menuItem.image.contentType};base64,${bufferToBase64(menuItem.image.data.data)}`} // Ensure image is passed as a string
        />
      ))}
    </div>
  );
};

const ActionAreaCard = ({ name, description, image ,price}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Rs. {price}.00
          </Typography>
          <Button variant="contained">Add to Cart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuDisplay;
