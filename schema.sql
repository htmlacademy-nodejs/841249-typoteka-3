DROP DATABASE IF EXISTS academy_typoteka;
DROP ROLE IF EXISTS academy_typoteka;

CREATE ROLE academy_typoteka
    WITH
    NOSUPERUSER
    NOCREATEDB
    NOCREATEROLE
    LOGIN
    PASSWORD 'academy'
    CONNECTION LIMIT -1;

CREATE DATABASE academy_typoteka
    WITH
    OWNER = academy_typoteka
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    TEMPLATE template0
    CONNECTION LIMIT = -1;
\connect academy_typoteka;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS articles_categories CASCADE;
DROP TABLE IF EXISTS types CASCADE;
DROP TABLE IF EXISTS categories_types CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS users_categories_comments CASCADE;

CREATE TABLE users
(
    id BIGSERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    avatar TEXT
);

CREATE TABLE articles
(
	id BIGSERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	image TEXT,
	sum DECIMAL(10, 2) NOT NULL,
	description VARCHAR(1000) NOT NULL,
	user_id BIGINT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE categories
(
	id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL
);

CREATE TABLE articles_categories
(
  offer_id BIGINT,
  category_id INT,
  CONSTRAINT carticles_categories_pk PRIMARY KEY(offer_id, category_id),
  FOREIGN KEY(offer_id) REFERENCES categories
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY(category_id) REFERENCES categories
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE types
(
	id SERIAL PRIMARY KEY,
	title VARCHAR(10) NOT NULL
);

CREATE TABLE categories_types
(
	offer_id BIGINT,
    type_id SMALLINT,
    CONSTRAINT categories_types_pk PRIMARY KEY(offer_id, type_id),
    FOREIGN KEY(offer_id) REFERENCES categories
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(type_id) REFERENCES types
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE comments
(
  id BIGSERIAL PRIMARY KEY,
  message VARCHAR(300) NOT NULL
);

CREATE TABLE users_categories_comments
(
    users_id BIGINT,
    categories_id BIGINT,
    comment_id BIGINT,
    CONSTRAINT users_categories_comments_pk PRIMARY KEY(users_id, categories_id, comment_id),
    FOREIGN KEY(users_id) REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(categories_id) REFERENCES categories
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY(comment_id) REFERENCES comments
        ON UPDATE CASCADE
        ON DELETE CASCADE
);
