create
or alter Procedure getAllFlights AS BEGIN
select
    id,
    userID,
    destination,
    departureDate,
    departureTime,
    arrivalTime
from
    flights
where
    isCanceled = 0
END