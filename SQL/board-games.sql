CREATE TABLE `board_games` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `min_players` INT,
  `max_players` INT,
  `play_time` INT,
  `age_rating` INT,
  `publisher` VARCHAR(255),
  `release_date` DATE,
  `category` VARCHAR(100),
  `image_url` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
