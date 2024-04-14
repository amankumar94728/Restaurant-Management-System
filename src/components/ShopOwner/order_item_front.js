import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function OrderForm() {

    const [orderData, setOrderData] = useState({
        orderId: '',
        userId: '',
        items: [{ menuItemId: '', quantity: '' }], // Match this structure with your backend schema
        totalAmount: '',
        orderStatus: 'pending',
        orderTime: new Date().toISOString(),
        tableNumber: ''
    });
    

    // const [orderData, setOrderData] = useState({
    //     orderId: '',
    //     userId: '',
    //     items: [{ menuItemId: '', quantity: '' }],
    //     totalAmount: '',
    //     orderStatus: 'pending',
    //     orderTime: new Date().toISOString(),
    //     tableNumber: ''
    // });

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setOrderData({ ...orderData, [name]: value });
    };

    const handleItemChange = (index, event) => {
        const { name, value } = event.target;
        const newItems = [...orderData.items];
        newItems[index][name] = value;
        setOrderData({ ...orderData, items: newItems });
    };

    const handleAddItem = () => {
        setOrderData({ ...orderData, items: [...orderData.items, { menuItemId: '', quantity: '' }] });
    };

    const handleRemoveItem = (index) => {
        const newItems = [...orderData.items];
        newItems.splice(index, 1);
        setOrderData({ ...orderData, items: newItems });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(orderData);
            await axios.post('http://localhost:3001/api/v1/orders/orders', orderData); // Correct endpoint
            // Add success handling here (e.g., show a success message)
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add error handling here (e.g., show an error message)
        }
    };
    

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         console.log(orderData);
    //         await axios.post('http://localhost:3001/api/v1/orders/orders', orderData);
    //         // Add success handling here (e.g., show a success message)
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //         // Add error handling here (e.g., show an error message)
    //     }
    // };

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Order Form
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="orderId"
                                        label="Order ID"
                                        name="orderId"
                                        value={orderData.orderId}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="userId"
                                        label="User ID"
                                        name="userId"
                                        value={orderData.userId}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                {orderData.items.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id={`menuItemId-${index}`}
                                                label="Menu Item ID"
                                                name="menuItemId"
                                                value={item.menuItemId}
                                                onChange={(e) => handleItemChange(index, e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id={`quantity-${index}`}
                                                label="Quantity"
                                                name="quantity"
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => handleItemChange(index, e)}
                                            />
                                        </Grid>
                                        {index > 0 && (
                                            <Button onClick={() => handleRemoveItem(index)}>Remove Item</Button>
                                        )}
                                    </React.Fragment>
                                ))}
                                <Grid item xs={12}>
                                    <Button onClick={handleAddItem}>Add Item</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="totalAmount"
                                        label="Total Amount"
                                        name="totalAmount"
                                        type="number"
                                        value={orderData.totalAmount}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="tableNumber"
                                        label="Table Number"
                                        name="tableNumber"
                                        type="number"
                                        value={orderData.tableNumber}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Add Order
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
