import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import { fetchProducts } from './utils/api';
import './assets/css/styles.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     const loadProducts = async () => {
    //         try {
    //             const data = await fetchProducts();
    //             setProducts(data);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         }
    //     };
    //     loadProducts();
    // }, []);

    // const handleAddToCart = (product) => {
    //     setCartItems((prevItems) => {
    //         const existingItem = prevItems.find(item => item.id === product.id);
    //         if (existingItem) {
    //             return prevItems.map(item =>
    //                 item.id === product.id
    //                     ? { ...item, quantity: item.quantity + 1 }
    //                     : item
    //             );
    //         }
    //         return [...prevItems, { ...product, quantity: 1 }];
    //     });
    // };

    const handleRemoveFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // return (
    //     <Router>
    //         {/* <Routes>
    //             <Route exact path="/" render={() => <Home products={products} onAddToCart={handleAddToCart} />} />
    //             <Route path="/checkout" render={() => <Checkout items={cartItems} onRemove={handleRemoveFromCart} totalAmount={totalAmount} />} />
    //             <Route path="/payment" component={Payment} />
    //         </Routes> */}
    //         <Routes>
    //         <Route exact path="/" render={() => <Home />} />
    //         </Routes>
    //     </Router>
    // );

    return (
        <div>
            <Home />
        </div>
    )
};

export default App;
