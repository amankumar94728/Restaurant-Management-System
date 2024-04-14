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

export default function IngredientForm() {
    const [ingredientData, setIngredientData] = useState({
        name: '',
        quantity: '',
        unit: '',
        unitPrice: '',
        expiryDate: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setIngredientData({ ...ingredientData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(ingredientData);
            await axios.post('http://localhost:3001/api/v1/ingredients/ingredient', ingredientData);
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
                            Ingredient Form
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Ingredient Name"
                                        name="name"
                                        value={ingredientData.name}
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
                                        value={ingredientData.quantity}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="unit"
                                        label="Unit"
                                        name="unit"
                                        value={ingredientData.unit}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="unitPrice"
                                        label="Unit Price"
                                        name="unitPrice"
                                        value={ingredientData.unitPrice}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="expiryDate"
                                        label="Expiry Date"
                                        name="expiryDate"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={ingredientData.expiryDate}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Add Ingredient
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
