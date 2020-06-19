const router = require('express').Router();

const product = require('./controllers/productCtrl');
const user = require('./controllers/userCtrl');
const auth = require('./controllers/authCtrl');

// Auth
router.post('/login', auth.login)

// Products
router.get('/products', product.getProducts)
router.get('/products/:id', product.getProductById)
router.post('/products', product.addProduct)

// Users
router.get('/users', user.getUsers)
router.get('/users/:id', user.getUserById)

module.exports = router