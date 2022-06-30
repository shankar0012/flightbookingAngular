import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string;
  
  url : string;
  forecast: any;
  constructor(private http: HttpClient) {
    //this.baseUrl = 'http://localhost:8082/api/Auth/';
    this.baseUrl = 'https://userservice20220629144640.azurewebsites.net/api/Auth/';
   
    this.url="";
   }
  //  public Register():Observable<any>{
  //    this.url=this.baseUrl+"Register";
  //    const headers={'content-type':'application/json','Access-Control-Allow-Origin': '*',};

  //     return this.http.post(this.url,{'headers':headers});
  //    }
     public Register(data:any):Observable<any>{
      this.url=this.baseUrl+"Register";
      const headers={'content-type':'application/json','Access-Control-Allow-Origin': '*',};
 
       return this.http.post(this.url,JSON.stringify(data),{'headers':headers});
      }
      public login(data:any):Observable<any>{
        this.url=this.baseUrl+"login";
        const headers={'content-type':'application/json','Access-Control-Allow-Origin': '*',responseType: 'text'};
         // alert(JSON.stringify(data));
         return this.http.post(this.url,JSON.stringify(data),{'headers':headers});
        }
      public GetUserDetailsbyUserName(data:any):Observable<any>{
        this.url=this.baseUrl+"GetUserDetailsbyUserName?UserName="+data;
        const headers={'content-type':'application/json','Access-Control-Allow-Origin': '*',responseType: 'text'};
         // alert(JSON.stringify(data));
         return this.http.get(this.url,{'headers':headers});
        }
   //return this.forecast;
     //.catch(this.handleError);
 }
