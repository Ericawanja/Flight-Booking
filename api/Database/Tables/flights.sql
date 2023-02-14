create Table flights(
    id varchar(100) Primary key,
    constraint userID foreign key(id) References users(id),
    destination varchar(200) Not Null,
    departureDate Date Not Null,
    departureTime Time(0) Not Null,
    arrivalTime Time(0) Not Null,
    isCanceled Bit default 0
)