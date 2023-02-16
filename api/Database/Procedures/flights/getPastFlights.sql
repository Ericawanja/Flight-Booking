create
or alter procedure getPastFlights AS Begin
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
    departureDate < CAST (GetDate() as date)
    OR departureDate = CAST (GetDate() as date)
    AND departureTime < CAST (GetDate() as Time)
END