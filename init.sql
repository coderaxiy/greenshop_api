CREATE TABLE IF NOT EXISTS category (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT unique,
    category_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS  plants (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT unique,
    name VARCHAR(50),
    category_id INT NOT NULL,
    new_arrival BOOLEAN,
    in_sale BOOLEAN,
    price DECIMAL(5,2),
    short_info VARCHAR(255),
    description TEXT,
    created_at DATE,
    rate INT,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT unique,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(25),
    photo VARCHAR(255),
    password VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS address (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT unique,
    country VARCHAR(255),
    city VARCHAR(255),
    street VARCHAR(255),
    zip INT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
