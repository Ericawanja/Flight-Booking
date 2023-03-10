create Table flights(
    id varchar(100) Primary key,
    userID varchar(100)foreign key References users(id),
    destination varchar(200) Not Null,
    departureDate Date Not Null,
    departureTime Time(0) Not Null,
	arrivalDate Date Not Null,
    arrivalTime Time(0) Not Null,
    isCanceled Bit default 0,
	isSent Bit default 1
)

