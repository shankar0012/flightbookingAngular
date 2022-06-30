import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseUrl: string;
  token: any;
  url: string;
  forecast: any;
  constructor(private http: HttpClient) {
   // this.baseUrl = 'http://localhost:9000/api/Flight/';
    this.baseUrl = 'https://flightservice1.azurewebsites.net/api/Flight/';
    this.token = "";
    this.url = "";
  }
  //  public Register():Observable<any>{
  //    this.url=this.baseUrl+"Register";
  //    const headers={'content-type':'application/json','Access-Control-Allow-Origin': '*',};

  //     return this.http.post(this.url,{'headers':headers});
  //    }
  public Airline(data: any): Observable<any> {
    this.url = this.baseUrl + "AddAirLine";
    this.token = localStorage.getItem('Token');
    //alert(this.token)
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + this.token };
    //alert(JSON.stringify(headers));
    //alert(JSON.stringify(data));
    return this.http.post(this.url, JSON.stringify(data), { 'headers': headers });
  }



  public UpdateAirLine(data: any): Observable<any> {
    this.url = this.baseUrl + "UpdateAirLine?AirlineId=" + data.AirlineId + "&IsActive=" + data.IsActive;
    // const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text' };
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };

    // alert(JSON.stringify(data));
    return this.http.put(this.url,'', { 'headers': headers });
  }
  public SearchFlight(data: any): Observable<any> {
    this.url = this.baseUrl + "SearchFlight?fromCity=" + data.FromCity + "&ToCity=" + data.ToCity + "&dateTime=" + data.FromDate + "&TripType=" + data.TripType;
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };

    return this.http.put(this.url,'', { 'headers': headers });
  }
  public SearchTicket(data: any): Observable<any> {
    this.url = this.baseUrl + "SearchTicket?PNR=" + data.PNR + "&emailId=" + data.EmailId;
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*','Authorization': 'Bearer ' + this.token };
 // alert(JSON.stringify(data));
    return this.http.put(this.url,'', { 'headers': headers });
  }
  public CancelTicket(data: any): Observable<any> {
    this.url = this.baseUrl + "CancelTicket?PNR=" + data.PNR;
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };
 // alert(JSON.stringify(data));
    return this.http.put(this.url,'', { 'headers': headers });
  }

  public GetAirLinelist(): Observable<any> {
    this.url = this.baseUrl + "GetAirLinelist";
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };
 // alert(JSON.stringify(data));
    return this.http.get(this.url, { 'headers': headers });
  }
  public GetActiveAirLinelist(): Observable<any> {
    this.url = this.baseUrl + "GetActiveAirLinelist";
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };
 // alert(JSON.stringify(data));
    return this.http.get(this.url, { 'headers': headers });
  }
  //return this.forecast;
  //.catch(this.handleError);

  public ScheduleAirline(data: any): Observable<any> {
    this.url = this.baseUrl + "ScheduleAirLine";
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };
  return this.http.post(this.url, JSON.stringify(data), { 'headers': headers });
  }
  public BookTicket(data: any): Observable<any> {
    this.url = this.baseUrl + "BookTicket";
    this.token = localStorage.getItem('Token');
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', responseType: 'text', 'Authorization': 'Bearer ' + this.token };

    return this.http.post(this.url, JSON.stringify(data), { 'headers': headers });
  }

  public GetFlightDetails(data: any): Observable<any> {
    this.url = this.baseUrl + "GetFlightDetails?SchId=" + data;
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', };

    return this.http.get(this.url, { 'headers': headers });
  }
}