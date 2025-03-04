export const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};
