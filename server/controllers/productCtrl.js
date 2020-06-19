const { pool } = require('../config');

const getProducts = (req, res) => {
    pool.query('SELECT * FROM product ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows)
    })
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM product WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results.rows[0])
        res.status(200).json(results.rows[0]);
    });
}

const addProduct = (req, res) => {
    const product = req.body;
    pool.query(`INSERT INTO product (name, description, category, price, image, quantity, origin, rating)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, name`,
        [product.name, product.description, product.category, product.price, product.image, product.quantity, product.coi, product.rating],
        (err, result) => {
            if (err) {
                throw err;
            }
            res.status(200).json(result.rows[0]);
        });
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
}