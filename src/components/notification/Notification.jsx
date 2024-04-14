import Navbar from '../adminPanel/dashboard/navbar';
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from "./notification.module.css";

export default function Notification() {
    return (
        <React.Fragment>
            <Navbar />

            <CssBaseline />

            <Container fixed>
                <Box sx={{ bgcolor: '#fff', display: 'flex', alignContent: 'center', justifyContent: 'center' }} >
                    <div className='noti-cont'>
                        <p>
                            hello
                        </p>
                        <p>
                            hello 2
                        </p>
                    </div>
                </Box>

            </Container>

        </React.Fragment>

    )
}