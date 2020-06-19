const { pool } = require('../config');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results.rows)
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getUsers,
    getUserById
}