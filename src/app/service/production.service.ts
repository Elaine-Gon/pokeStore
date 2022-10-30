import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Production } from '../model/production.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  apiURL = "http://localhost:3000/products"

  constructor(
    private http: HttpClient
  ) { }

  public GetAllProduction():Observable<Production>{
    return this.http.get<Production>("http://localhost:3000/products")
  }
}
