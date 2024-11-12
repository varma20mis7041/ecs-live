import React, { useState } from 'react';

const Payment = ({ totalAmount }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePayment = () => {
        // Implement payment logic here (e.g., integrate with PhonePe API)
        console.log(`Processing payment of $${totalAmount} for ${phoneNumber}`);
    };

    return (
        <div className="payment">
            <h2>Payment</h2>
            <h3>Total Amount: ${totalAmount}</h3>
            <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
