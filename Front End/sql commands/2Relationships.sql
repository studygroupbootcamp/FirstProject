USE project;

CREATE TABLE relationships (
    relID INT(10) NOT NULL AUTO_INCREMENT,
    UIDFrom INT(10) NOT NULL,
    UIDTo INT(10) NOT NULL,
    PRIMARY KEY (relID)
);

INSERT INTO relationships (UIDfrom, UIDto)
VALUES ( 1 , 4 );