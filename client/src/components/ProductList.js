import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-list">
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
