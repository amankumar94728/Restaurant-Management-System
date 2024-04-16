import React from 'react';
import { Link } from 'react-router-dom';
import Resto from './resto2.jpg';
import Button from '@mui/material/Button';

const HomePage = () => {
    return (
        <div style={{  
            backgroundImage: `url(${Resto})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh',
            color:'#37323E' 
        }}>
            <h1>Welcome to My Restaurant Management System</h1>
            <div style={{ 
                textAlign: 'center', 
                marginTop: '30px', 
                display: 'flex', 
                justifyContent: 'space-evenly' 
            }}>
                 <Button style={buttonStyle} component={Link} to="/Sigup" >
                    Signup
                </Button>
                <Button style={buttonStyle} component={Link} to="/Sgn">
                    Signin
                </Button>
            </div>
        </div>
    );
}

const buttonStyle = {
    backgroundColor: '#12263A',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '5px',
};

export default HomePage;
