import React from 'react';
import Cart from '../components/cart';
import Payment from '../components/Payment';

const Checkout = ({ items, onRemove, totalAmount }) => {
    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <Cart items={items} onRemove={onRemove} />
            <Payment totalAmount={totalAmount} />
        </div>
    );
};

export default Checkout;
