DROP DATABASE IF EXISTs Project;
CREATE DATABASE Project;

USE Project;

CREATE TABLE accounts (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO accounts (name, email, password)
VALUES ('Devon', 'Dvowen@cox.net', 'Jakeybear5'), ('David', 'Djowen@cox.net', 'Jakeybear6');