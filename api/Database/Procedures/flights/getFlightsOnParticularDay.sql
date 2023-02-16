create or alter procedure getFlightsOnParticularDay
AS
BEGIN
select
    id,
    userID,
    destination,
    departureDate,
    departureTime,
    arrivalTime
from
    flights where departureDate = CAST (GetDate() as date) 
	
END