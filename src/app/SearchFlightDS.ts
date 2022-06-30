export interface SearchFlightDS{
    SchId : number,  
     AirlineId : number,
    FlightNo :string,
     FlightName :string,
    FromCity :string,
    ToCity :string,
    FromDate? :Date,
     ToDate? :Date,
    ScheduledDays :string,
    InstrumentUsed :string,
   BCSeats : number,
    NBCSeats : number,
     TicketCost: number,    
     Discount: number,
    Meals :string
}