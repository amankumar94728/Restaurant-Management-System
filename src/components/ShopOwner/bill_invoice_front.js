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

export default function BillingForm() {
    const [billData, setBillData] = useState({
        orderId: '',
        customerId: '',
        totalAmount: '',
        paymentMethod: '',
        items: [{ menuItemId: '', quantity: '' }],
        discounts: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBillData({ ...billData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(billData);
            await axios.post('http://localhost:3001/api/v1/bills/bill', billData);
            // Add success handling here (e.g., show a success message)
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add error handling here (e.g., show an error message)
        }
    };

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
                            Billing Form
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
                                        value={billData.orderId}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="customerId"
                                        label="Customer ID"
                                        name="customerId"
                                        value={billData.customerId}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                {/* Add fields for items array */}
                                {/* You can dynamically add/remove items if needed */}
                                {/* Example of one item */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="menuItemId"
                                        label="Menu Item ID"
                                        name="menuItemId"
                                        value={billData.items[0].menuItemId}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="quantity"
                                        label="Quantity"
                                        name="quantity"
                                        type="number"
                                        value={billData.items[0].quantity}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="totalAmount"
                                        label="Total Amount"
                                        name="totalAmount"
                                        type="number"
                                        value={billData.totalAmount}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="paymentMethod"
                                        label="Payment Method"
                                        name="paymentMethod"
                                        value={billData.paymentMethod}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="discounts"
                                        label="Discounts"
                                        name="discounts"
                                        type="number"
                                        value={billData.discounts}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Generate Bill
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Back to Home
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
