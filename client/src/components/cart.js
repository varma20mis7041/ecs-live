import React from 'react';

const Cart = ({ items, onRemove }) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => onRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
