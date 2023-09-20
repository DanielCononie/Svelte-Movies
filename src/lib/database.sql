CREATE DATABASE sveltemovies;

CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    movie_image VARCHAR(200) NOT NULL,
    description VARCHAR(255) NOT NULL,
    rating numeric(5, 0) NOT NULL,
    genre VARCHAR(50) NOT NULL
);