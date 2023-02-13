create table users(
    id varchar(100),
    firstname varchar(100) Not Null,
    lastname varchar(100) Not Null,
    email varchar(300) Not Null unique,
    mobile_number varchar(200) Not Null,
    residence varchar(100) Not Null,
    password VARCHAR(300) Not Null,
    isdeleted BIT Default 0
)