import React from 'react';

const Item = ({ item, onAdd }) => {
    return (
        <div className="item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => onAdd(item)}>Add to Cart</button>
        </div>
    );
};

export default Item;
