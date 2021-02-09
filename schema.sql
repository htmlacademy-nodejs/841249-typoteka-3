DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles_categories;
DROP TABLE IF EXISTS categories;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  pass VARCHAR(100) NOT NULL,
  avatar_path VARCHAR(255) NOT NULL
);

CREATE UNIQUE INDEX user_unique_ind ON users (email, firstname, lastname);


CREATE TABLE categories
(
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(16) NOT NULL
);

CREATE TABLE articles
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  title VARCHAR(250) NOT NULL,
  created_date TIMESTAMP NOT NULL,
  image_path VARCHAR(255) NOT NULL,
  announce VARCHAR(500) NOT NULL,
  full_text TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
		ON DELETE CASCADE
);

CREATE UNIQUE INDEX articles_unique_ind ON articles (title);

CREATE TABLE articles_categories
(
  article_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  FOREIGN KEY (article_id) REFERENCES articles (id)
		ON DELETE CASCADE,
	FOREIGN KEY (category_id) REFERENCES categories (id)
		ON DELETE CASCADE
);

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  article_id INTEGER NOT NULL,
  comment_date DATE NOT NULL,
  comment_text VARCHAR(1000),
  FOREIGN KEY (user_id) REFERENCES users (id)
		ON DELETE CASCADE,
  FOREIGN KEY (article_id) REFERENCES articles (id)
		ON DELETE CASCADE
);
