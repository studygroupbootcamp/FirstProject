USE project;

CREATE TABLE Posts (
    Postid INT(255) NOT NULL AUTO_INCREMENT,
    PosterName VARCHAR(255) NOT NULL,
    PosterId INT(255) NOT NULL,
    Head VARCHAR(50) NOT NULL,
    Body VARCHAR (255) NOT NULL,
    Private BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (Postid)
);

INSERT INTO Posts(PosterName, PosterId, Head, Body,)
VALUES ('Devon', 1, 'My first post!', 'This is my first post!'), ('Taylor', 2, 'I really like Hotdogs', 'Even VARIABLES can be hotdog.');