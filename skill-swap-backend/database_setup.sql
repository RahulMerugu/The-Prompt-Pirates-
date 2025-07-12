CREATE DATABASE skill_swap;

USE skill_swap;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(100),
  availability VARCHAR(100),
  is_public BOOLEAN DEFAULT TRUE
);

-- Skills Table
CREATE TABLE skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  skill_name VARCHAR(100),
  type ENUM('offered', 'wanted'),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Swap Requests Table
CREATE TABLE swap_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  from_user_id INT,
  to_user_id INT,
  skill_requested VARCHAR(100),
  skill_offered VARCHAR(100),
  status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
  FOREIGN KEY (from_user_id) REFERENCES users(id),
  FOREIGN KEY (to_user_id) REFERENCES users(id)
);
