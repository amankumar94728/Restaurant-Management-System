import React, { useState, useEffect } from 'react';
import './PaymentPopup.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Cookies from "js-cookie";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MenuDisplay = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [cart, setCart] = useState({});
  const addToCart = (itemId) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    if (cart[itemId] > 0) {
      setCart(prevCart => ({
        ...prevCart,
        [itemId]: prevCart[itemId] - 1
      }));
    }
  };
  function bufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  const getTotalPrice = () => {
    let totalPrice = 0;
    menuItems.forEach(item => {
      const count = cart[item._id] || 0;
      totalPrice += count * item.price;
    });
    return totalPrice;
  };
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
  const handleOpenPaymentPopup = () => {
    setShowPaymentPopup(true);
  };

  const handleClosePaymentPopup = () => {
    setShowPaymentPopup(false);
  };


  return (
    <div>
      {menuItems.map(menuItem => (
        <ActionAreaCard
          key={menuItem._id}
          name={menuItem.name}
          price={menuItem.price}
          description={menuItem.description}
          image={`data:${menuItem.image.contentType};base64,${bufferToBase64(menuItem.image.data.data)}`}
          itemId={menuItem._id} // Pass item ID to identify cart item
          cartCount={cart[menuItem._id] || 0} // Get count for this item from cart state
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <Typography variant="h6">Total Price: Rs. {getTotalPrice()}.00</Typography>
      <Button variant="contained" onClick={handleOpenPaymentPopup}>Proceed to Payment</Button>
      {showPaymentPopup && <PaymentPopup onClose={handleClosePaymentPopup} menuItems={menuItems} cart={cart} />}
    </div>
  );
};

const ActionAreaCard = ({ name, description, image, price, itemId, cartCount, addToCart, removeFromCart }) => {
  const navigate = useNavigate();

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
          {cartCount}
          <Button variant="contained" onClick={() => addToCart(itemId)}> + </Button>
          <Button variant='contained' onClick={() => removeFromCart(itemId)}> - </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
const PaymentPopup = ({ onClose, menuItems, cart }) => {
  const getTotalPrice = () => {
    let totalPrice = 0;
    menuItems.forEach(item => {
      const count = cart[item._id] || 0;
      totalPrice += count * item.price;
    });
    return totalPrice;
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Payment Summary</h2>
        <div className="cart-items">
          <ul>
            {menuItems.map(item => (
              <li key={item._id}>
                <span>{item.name}</span>
                <span>Quantity: {cart[item._id] || 0}</span>
                <span>Price: Rs. {item.price * (cart[item._id] || 0)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-price">
          <span>Total Price: Rs. {getTotalPrice()}.00</span>
        </div>
        <Button variant="contained" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default MenuDisplay;
