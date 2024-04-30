const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let users = [
    { id: 1, username: 'user@gmail.com', password: '1234', role: 'user' },
    { id: 2, username: 'admin@gmail.com', password: '1234', role: 'admin' }
];

let categories = [];
let products = [];
let carts = [];

app.use(bodyParser.json());

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.json({ user });
});


app.post('/categories', (req, res) => {
   
});


app.put('/categories/:categoryId', (req, res) => {

});

app.delete('/categories/:categoryId', (req, res) => {
    
});


app.get('/categories', (req, res) => {
    res.json({ categories });
});


app.get('/categories/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    
});

// Product APIs
// Create product
app.post('/products', (req, res) => {

});


app.put('/products/:productId', (req, res) => {

});


app.delete('/products/:productId', (req, res) => {

});


app.get('/products', (req, res) => {
    res.json({ products });
});


app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    
});


app.post('/cart', (req, res) => {
   
});

// Remove product from cart
app.delete('/cart/:productId', (req, res) => {
    // Remove from cart logic
});


app.put('/cart/:productId', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
