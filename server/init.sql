DROP DATABASE IF EXISTS roobarbs;
CREATE DATABASE roobarbs;

\c roobarbs;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isControl BOOLEAN DEFAULT false
);

INSERT INTO users (username, password)
    VALUES
    ('user1', 'test'),
    ('user2', 'test');

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100),
    category VARCHAR(30) NOT NULL,
    image VARCHAR(100),
    quantity NUMERIC NOT NULL,
    price NUMERIC NOT NULL,
    origin VARCHAR(30) NOT NULL,
    rating NUMERIC
);

INSERT INTO product (name, description, category, price, image, quantity, origin, rating)
    VALUES
    ('Apple (Loose)', 'This is an apple', 'fruit', 0.40, 'https://i.imgur.com/a2ol1Yg.jpg', 1, 'UK', 1),
    ('Apple (Loose)', 'This is an apple', 'fruit', 0.35, 'https://i.imgur.com/a2ol1Yg.jpg', 1, 'France', 2),
    ('Apple (5 pack)', 'This is a pack of apples', 'fruit', 1.60, 'https://i.imgur.com/a2ol1Yg.jpg', 5, 'UK', 1),
    ('Apple (5 pack)', 'This is a pack of apples', 'fruit', 1.40, 'https://i.imgur.com/a2ol1Yg.jpg', 5, 'France', 2),
    ('Pear (Loose)', 'This is a pear', 'fruit', 0.45, 'https://i.imgur.com/K2r74RJ.jpg', 1, 'UK', 1),
    ('Pear (Loose)', 'This is a pear', 'fruit', 0.39, 'https://i.imgur.com/K2r74RJ.jpg', 1, 'France', 2),
    ('Pear (4 pack)', 'This is a pack of pears', 'fruit', 1.80, 'https://i.imgur.com/K2r74RJ.jpg', 4, 'UK', 1),
    ('Pear (4 pack)', 'This is a pack of pears', 'fruit', 1.65, 'https://i.imgur.com/K2r74RJ.jpg', 4, 'France', 2);