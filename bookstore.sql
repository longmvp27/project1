-- Create book table
CREATE TABLE book (
  book_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  price INT(10) NOT NULL,
  language VARCHAR(20),
  genre VARCHAR(255),
  PRIMARY KEY (book_id)
);

-- Create sale_details table
CREATE TABLE sale_details (
  sale_id INT,
  book_id INT,
  quantity INT,
  FOREIGN KEY (sale_id) REFERENCES sale(sale_id),
  FOREIGN KEY (book_id) REFERENCES book(book_id)
);

-- Create sale table
CREATE TABLE sale (
  sale_id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  shipping_method VARCHAR(100),
  sum_total DECIMAL(10, 2),
  status boolean NOT NULL,
  date DATE,
  PRIMARY KEY (sale_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);

-- Create user table
CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  address VARCHAR(255),
  phone VARCHAR(20),
  isAdmin boolean DEFAULT FALSE,
  PRIMARY KEY (user_id)  
);
