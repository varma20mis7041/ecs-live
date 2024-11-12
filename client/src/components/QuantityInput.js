import React from 'react';

const QuantityInput = ({ value, onChange }) => {
    return (
        <input
            type="number"
            min="1"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    );
};

export default QuantityInput;
