
import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookies from 'js-cookie';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Userreg() {
  Cookies.set("name","value")
 const  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const userData = new FormData(event.currentTarget)
    const formData ={
        sname:userData.get('shopName'),
        Oname:userData.get('OName'),
        email: userData.get('email'),
        phoneNo: userData.get('phoneNo'),
        add: userData.get('address'),
        city: userData.get('city'),
        state: userData.get('state'),
        zipcode: userData.get('zipCode'),
        gstno:userData.get('gstNumber'),
        country: userData.get('country'),
        img: userData.get('shopLogoUrl'),
        registration: userData.get('registrationName'),
        
    };    
    try {
        console.log({
            sname: formData.sname,
            Oname: formData.Oname,
            email: formData.email,
            phoneNo: formData.phoneNo,
            add:formData.add,
            city:formData.city,
            state:formData.state,
            zipcode:formData.zipcode,
            gstno:formData.gstno,
            country:formData.country,
            img:formData.img,
            registration:formData.registration,
          });
        await axios.post('http://localhost:3001/api/v1/Userreg/Userreg', formData);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
  };
            
  return (
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
            User Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="shopName"
                  required
                  fullWidth
                  id="shopName"
                  label="Shop Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="OName"
                  label="Owner Name"
                  name="OName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
               <TextField
                required
               fullWidth
               name="phoneNo" // Changed name to "phoneNo"
                label="Phone Number"
                type="tel" // Changed type to "tel" for better input validation
                id="phoneNo" // Changed id to "phoneNo"
                autoComplete="tel" // Changed autoComplete to "tel" for phone number input
             />
             <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='shop registration name'
                  name='registrationName'
                  type='text'
                  id='reg-name'
                  autoComplete='text'
                />
             </Grid>
        </Grid>
        <Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="city" // Set name to "city" to match the schema
    label="City"
    id="city" // Set id to "city"
    autoComplete="address-level2" // Set autoComplete to "address-level2" for city input
  />
</Grid>
<Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="state" // Set name to "state" to match the schema
    label="State"
    id="state" // Set id to "state"
    autoComplete="address-level1" // Set autoComplete to "address-level1" for state input
  />
</Grid>
<Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="zipCode" // Set name to "zipCode" to match the schema
    label="ZIP Code"
    id="zipCode" // Set id to "zipCode"
    autoComplete="postal-code" // Set autoComplete to "postal-code" for ZIP code input
  />
</Grid>

<Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="country" // Set name to "country" to match the schema
    label="Country"
    id="country" // Set id to "country"
    autoComplete="country-name" // Set autoComplete to "country-name" for country input
  />
</Grid>

<Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="gstNumber" // Set name to "gstNumber" to match the schema
    label="GST Number"
    id="gstNumber" // Set id to "gstNumber"
    autoComplete="gst-number" // Set autoComplete to "gst-number" for GST number input
  />
</Grid>
<Grid item xs={12}>
  <TextField
    fullWidth
    name="shopLogoUrl" // Set name to "shopLogoUrl" to match the schema
    label="Shop Logo URL"
    id="shopLogoUrl" // Set id to "shopLogoUrl"
  />
</Grid>

{/* 
<Grid item xs={12}>
  <TextField
    fullWidth
    name="shopLogoUrl" // Set name to "shopLogoUrl" to match the schema
    label="Shop Logo URL"
    id="shopLogoUrl" // Set id to "shopLogoUrl"
  />
</Grid> */}

                  <Grid item xs={12}>
                      <TextField
                       required
                      fullWidth
                      name="address" // Set name to "address" to match the schema
                      label="Address"
                      id="address" // Set id to "address"
                      autoComplete="address-line1" // Set autoComplete to "address-line1" for address input
                    />
                    </Grid>


              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
