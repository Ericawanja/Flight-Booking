export class Booking {
  constructor(
    public Id: string,
    public userID: string,
    public destination: string,
    public departureDate: Date,
    public departureTime:Date,
    public arrivalDate:Date,
    public arrivalTime:Date,
  ){}
}
