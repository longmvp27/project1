-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2023 at 08:16 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookgenres`
--

CREATE TABLE `bookgenres` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookgenres`
--

INSERT INTO `bookgenres` (`id`, `book_id`, `genre_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 4),
(4, 4, 5),
(5, 5, 3),
(6, 6, 5),
(7, 7, 2),
(8, 8, 4),
(9, 9, 5),
(10, 10, 2),
(11, 11, 1),
(12, 12, 4),
(13, 13, 2);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `price`, `image`) VALUES
(1, 'Empire Of The Senseless', 'Acker Kathy', 170000, 'https://m.media-amazon.com/images/I/51kS07+nDwL.jpg'),
(2, 'In Memoriam To Identity', 'Acosta Oscar Zeta', 210000, 'https://m.media-amazon.com/images/I/71G-8a7RpKL._AC_UF1000,1000_QL80_.jpg'),
(3, 'Art Attack: A Short Cultural History of the Avant-Garde', 'Richard Brautigan', 130000, 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/HawklineMonster.JPG/220px-HawklineMonster.JPG'),
(4, 'Gang Of Souls: A Generation Of Beat Poets', 'Davis Stephen', 100000, 'https://upload.wikimedia.org/wikipedia/en/a/a6/Cover_of_Richard_Brautigan%27s_June_30th%2C_June_30th.jpg'),
(5, 'Women Of The Left Bank: Paris 1900-1940', 'Franck Dan', 100000, 'https://rareamericana.cdn.bibliopolis.com/pictures/3732070_1.jpg?v=1662664912'),
(6, 'The Goncourt Brothers', 'Franklin Benjamin V ed.', 220000, 'https://upload.wikimedia.org/wikipedia/en/2/24/RommelDrivesOnDeepIntoEgypt.jpg'),
(7, 'My Life and Loves in Greenwich Village', 'Frees Paul', 150000, 'https://upload.wikimedia.org/wikipedia/en/c/c7/SombreroFallout.jpg'),
(8, 'My Sisters Hand In Mine', 'French Warren', 270000, 'https://1960sdaysofrage.files.wordpress.com/2017/06/brautigancover.jpeg'),
(9, 'Two Serious Ladies', 'Fritz James', 100000, 'https://mpd-biblio-covers.imgix.net/9780312277109.jpg?w=300'),
(10, 'Let It Come Down', 'Conners Peter', 180000, 'https://m.media-amazon.com/images/I/81OBVqzun9L._AC_UF894,1000_QL80_.jpg'),
(11, 'Stories of Paul Bowles', 'Cook Bruce', 170000, 'https://m.media-amazon.com/images/I/61I7IH8sryL._AC_UF1000,1000_QL80_.jpg'),
(12, 'Paris By Night', 'Coolidge Clark', 290000, 'https://pictures.abebooks.com/inventory/md/md31335414127.jpg'),
(13, 'Python', 'BaoAnh', 234000, 'https://i5.walmartimages.com/asr/fa9574f2-2d73-43ba-b3c5-9e0ad2cffe5d_1.41d85ba8dc65323c6cd0d0485dfdb406.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Fiction'),
(2, 'Thriller'),
(3, 'Science'),
(4, 'Horror'),
(5, 'Mystery');

-- --------------------------------------------------------

--
-- Table structure for table `saledetails`
--

CREATE TABLE `saledetails` (
  `id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shipping_method` enum('shipping','in_store') NOT NULL,
  `sum_total` float NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gmail` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `gmail`, `role`, `address`, `phone`) VALUES
(1, 'Long', '12345678', 'long@gmail.com', 'user', NULL, NULL),
(2, 'Admin', '12345678', 'admin@gmail.com', 'admin', NULL, NULL),
(3, 'Huyen', '12345678', 'huyen@gmail.com', 'user', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookgenres`
--
ALTER TABLE `bookgenres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saledetails`
--
ALTER TABLE `saledetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_id` (`sale_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gmail` (`gmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookgenres`
--
ALTER TABLE `bookgenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `saledetails`
--
ALTER TABLE `saledetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookgenres`
--
ALTER TABLE `bookgenres`
  ADD CONSTRAINT `bookgenres_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookgenres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `saledetails`
--
ALTER TABLE `saledetails`
  ADD CONSTRAINT `saledetails_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `saledetails_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
