const addTODb = id => {
    let shoppingCart = {};

    // Get shopping cart from local storage
    const storedCard = localStorage.getItem('shopping-cart')
    if (storedCard) {
        shoppingCart = JSON.parse(storedCard)
    }

    // Add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


// Get data from local storage

const getStoredCart = () => {
    let shoppingCart = {};

    // Get shopping cart from local storage
    const storedCard = localStorage.getItem('shopping-cart')
    if (storedCard) {
        shoppingCart = JSON.parse(storedCard)
    }
    return shoppingCart;
}

// Delete items from cart
const removeDb = (id) => {
    const storedCard = localStorage.getItem('shopping-cart')
    if (storedCard) {
        const shoppingCart = JSON.parse(storedCard)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }
        // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

    }
}

// Delete all items in the Cart
const removeCart=()=> localStorage.removeItem('shopping-cart');
export { addTODb, getStoredCart, removeDb, removeCart };

