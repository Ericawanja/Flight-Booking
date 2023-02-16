create
or alter procedure getPendingFlightsToday AS Begin
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
    departureDate = CAST (GetDate() as date)
    AND departureTime > CAST (GetDate() as Time)
END