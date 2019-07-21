DROP DATABASE IF EXISTs Project;
CREATE DATABASE Project;

USE Project;

CREATE TABLE accounts (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,
    adminPassword VARCHAR(32) DEFAULT NULL,
    date_created DATE NOT NULL,
    date_updated DATE,
    active ENUM('yes', 'no') NOT NULL DEFAULT 'no',
    PRIMARY KEY (id),
    /*I honestly have NO idea if the stupid UNIQUE thing is working. I just set it in workbench honestly. It just means the database wont let there be more
than 2 emails or names please let me know if it works for you or if you figure it out.*/
    UNIQUE KEY email,
    UNIQUE KEY name
);

INSERT INTO accounts (name, email, password, date_created)
VALUES ('Devon', 'Dvowen@cox.net', 'password', '2019-07-20'), ('Taylor', 'Taylor@Hotdogs.net', 'Hotdogs', '2019-07-20'),