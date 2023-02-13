create
or Alter Procedure addOrUpdateUser(
    @id varchar(100),
    @firstname varchar (100),
    @lastname varchar (100),
    @email varchar(200),
    @mobile_number varchar(200),
    @password varchar(300),
    @residence varchar (200)
) AS BEGIN
set
    nocount on 
	Declare @exists BIT
select
    @exists = count(@email)
from
    users
where
    email = @email And isdeleted = 0 
    if @exists = 0 Begin
insert into
    users(
        id,
        firstname,
        lastname,
        email,
        mobile_number,
        residence,
        password
    )
values
    (
        @id,
        @firstname,
        @lastname,
        @email,
        @mobile_number,
        @residence,
        @password
    )
END
ELSE BEGIN
update
    users
set
    id = @id,
    firstname = @firstname,
    lastname = @lastname,
    email = @email,
    residence = @residence,
    mobile_number = @mobile_number,
    password = @password
End
END