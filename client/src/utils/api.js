const API_URL = 'http://localhost:5000/api'; // Update with your server URL

export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const processPayment = async (paymentDetails) => {
    const response = await fetch(`${API_URL}/payment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
    });
    if (!response.ok) throw new Error('Payment processing failed');
    return response.json();
};
