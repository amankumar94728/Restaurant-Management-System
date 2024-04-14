import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const BookTablePage = () => {
    const [availableSeats, setAvailableSeats] = useState([]);
    const [availableSeatCount, setAvailableSeatCount] = useState(0);

    useEffect(() => {
        // Fetch available seats from your backend API
        const fetchAvailableSeats = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/tables/tables');
                setAvailableSeats(response.data);
                const availableCount = response.data.filter(seat => seat.status !== 'reserved').length;
                setAvailableSeatCount(availableCount);
            } catch (error) {
                console.error('Error fetching available seats:', error);
            }
        };

        fetchAvailableSeats();
    }, []);

    const handleBookSeat = async (seatId) => {
        try {
            // Send a request to book the selected seat
            await axios.patch(`http://localhost:3001/api/v1/tables/tables/${seatId}`, { status: 'reserved' });
            // Update availableSeats locally by marking the booked seat as reserved
            const updatedSeats = availableSeats.map(seat =>
                seat._id === seatId ? { ...seat, status: 'reserved' } : seat
            );
            setAvailableSeats(updatedSeats);
            setAvailableSeatCount(prevCount => prevCount - 1);
            // Show a success message or redirect to a confirmation page
        } catch (error) {
            console.error('Error booking seat:', error);
        }
    };

    return (
        <div>
            <h1>Available Seats: {availableSeatCount}</h1>
            <div>
                {/* Create a "Book" button for each available seat */}
                {availableSeats.map((seat) => (
                    <Button
                        key={seat._id}
                        variant="contained"
                        disabled={seat.status === 'reserved'}
                        onClick={() => handleBookSeat(seat._id)}
                    >
                        {`Seat ${seat.tableNumber}`}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default BookTablePage;
