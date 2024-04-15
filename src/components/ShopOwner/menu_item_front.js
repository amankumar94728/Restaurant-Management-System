import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Navbar from "../shop_admin/dashboard/shop_o_navbar";
import Menu from "../shop_admin/menu/menu_item_admin";

const MenuItemForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'appetizer',
        availability: true,
        image: null,
        quantity: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('availability', formData.availability);
            formDataToSend.append('image', formData.image);
            formDataToSend.append('quantity', formData.quantity);

            await axios.post('http://localhost:3001/api/v1/menuitems/menu-items', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Add success handling (e.g., show a success message)
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add error handling (e.g., show an error message)
        }
    };

    return (
        <Container maxWidth="sm">
            <Navbar />
            <Typography variant="h4" align="center" gutterBottom>
                Add Menu Item
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="name"
                            name="name"
                            label="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="description"
                            name="description"
                            label="Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="price"
                            name="price"
                            label="Price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth required>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <MenuItem value="appetizer">Appetizer</MenuItem>
                                <MenuItem value="main_course">Main Course</MenuItem>
                                <MenuItem value="dessert">Dessert</MenuItem>
                                <MenuItem value="beverage">Beverage</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth required>
                            <InputLabel id="availability-label">Availability</InputLabel>
                            <Select
                                labelId="availability-label"
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                            >
                                <MenuItem value={true}>Availabe</MenuItem>
                                <MenuItem value={false}>Not Availabe</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            type="number"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Item
                        </Button>
                    </Grid>
                </Grid>
            </form>
            
            <Menu />
        </Container>
    );
};

export default MenuItemForm;
