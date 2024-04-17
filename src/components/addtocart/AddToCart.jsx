import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import MenuItems from "./../shop_admin/menu/menu_item_admin _cart.js"

const AddToCart = ({ userId, itemId, quantity, price }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addToCart = async () => {
        setLoading(true);
        try {
            await axios.post('/api/add-to-cart', {
                userId,
                itemId,
                quantity,
                price
            });
            setError(null);
            setLoading(false);
            console.log('Item added to cart successfully');
        } catch (error) {
            setError('Failed to add item to cart');
            setLoading(false);
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <div>
            <MenuItems />
        </div>
    );
};

export default AddToCart;
