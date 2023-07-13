import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Contact } from './contact';
    
@Injectable({
  providedIn: 'root'
})
export class ContactService {
    
  private apiURL = "https://localhost:7271/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'https://localhost'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Contact[]> {
    console.log("Fetching")
    return this.httpClient.get<Contact[]>(this.apiURL + '/Contacts')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(post: string): Observable<Contact> {
    return this.httpClient.post<Contact>(this.apiURL + '/Contacts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: string): Observable<Contact> {
    return this.httpClient.get<Contact>(this.apiURL + '/Contacts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: string, contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(this.apiURL + '/Contacts/' + id, JSON.stringify(contact), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: string){
    return this.httpClient.delete<Contact>(this.apiURL + '/Contacts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}