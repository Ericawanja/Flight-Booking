export class Booking {
  constructor(
    publicId: string,
    public userID: string,
    public destination: string,
    public departureDate: Date,
    public departureTime:Time,
    public arrivalDate:Date,
    public arrivalTime:TimeRanges,
  );
}
