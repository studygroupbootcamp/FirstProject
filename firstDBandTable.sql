CREATE DATABASE Project;

USE Project;

CREATE TABLE people (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    Favorite VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO people (name, Favorite)
VALUES ('Taylor', 'Hotdogs');