create
or alter procedure getUSer(@email varchar(300)) AS BEGIN
select
    id,
    firstname,
    lastname,
    email,
    mobile_number,
    residence,
    password
from
    users
where
    email = @email And isdeleted = 0 
END