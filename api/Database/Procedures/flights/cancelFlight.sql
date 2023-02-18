create or alter procedure cancelFlight(
    @id varchar(200)
)
AS
BEGIN
update flights set isCanceled = 1 where id = @id
END