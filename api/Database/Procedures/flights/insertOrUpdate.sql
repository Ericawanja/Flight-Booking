create
or alter procedure insertOrUpdateFlight(
    @id varchar(100),
    @userId varchar(100),
    @destination varchar(100),
    @departureDate Date,
    @departureTime Time,
    @arrivalDate Date,
    @arrivalTime Time,
    @isCanceled Bit = 0,
    @isSent Bit = 1
) AS BEGIN Declare @exists Bit
select
    @exists = count(id)
from
    flights
where
    id = @id;

if @exists = 0 BEGIN
insert into
    flights
values
    (
        @id,
        @userId,
        @destination,
        Cast(@departureDate as Date),
        Cast(@departureTime as Tine),
        Cast(@arrivalDate as Date),
        Cast(@arrivalTime as Time),
        @isCanceled,
        @isSent
    )
END
ELSE BEGIN
update
    flights
set
    id = @id,
    userId = @userId,
    destination = @destination,
    departureDate = Cast(@departureDate as Date),
    departureTime = Cast(@departureTime as Tine),
    arrivalDate = Cast(@arrivalDate as Date),
    arrivalTime = Cast(@arrivalTime as Time),
    isCanceled = @isCanceled,
    isSent = @isSent
END
END