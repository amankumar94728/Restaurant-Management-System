import Navbar from "../dashboard/navbar";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Setting() {

    return (
      <React.Fragment>
        <Navbar />
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#fff', display:'flex',alignContent:'center',justifyContent:'center'  }} >
          <Card sx={{ minWidth: 800  }}>
        <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Setting

          </Typography>
        </CardContent>
        <Card>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <CardActions>
                Laura lasan
            </CardActions>
          </Typography>
        </CardContent>
        </Card>
      </Card>
              </Box>
          
        </Container>
      </React.Fragment>
    );
  }