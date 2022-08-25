import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokeStore';

  public pokemons$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.pokemons$ = this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
  }
}
