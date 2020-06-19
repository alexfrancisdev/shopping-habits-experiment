const { pool } = require('../config');
const bcrypt = require("bcrypt");

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password
    pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username],
        (err, results) => {
            if (err) {
                throw err;
            }
            if (results.rows.length > 0) {
                const user = results.rows[0];
                if (password === user.password) {
                    return res.status(200).json({ message: 'Logged in' });
                } else {
                    return res.status(401).json({ message: 'Username or password incorrect' });
                }

                // bcrypt.compare(password, user.password, (err, isMatch) => {
                //     if (err) {
                //         console.log(err);
                //         return res.status(400).json({ message: 'Error' });
                //     }
                //     if (isMatch) {
                //         console.log('is a match');
                //         return res.status(200).json({ message: 'Logged in' });

                //         // return done(null, user);
                //     } else {
                //         console.log('not a match');
                //         return res.status(401).json({ message: 'Incorrect password' });

                //         //password is incorrect
                //         // return done(null, false, { message: "Password is incorrect" });
                //     }
                // });
            } else {
                // No user
                return res.status(401).json({ message: 'Username or password incorrect' });
            }
        }
    );
}

module.exports = {
    login
}