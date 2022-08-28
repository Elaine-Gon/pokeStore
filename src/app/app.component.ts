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

    this.http.get("http://localhost:3000/products")
      .subscribe(d=> console.log(d));

    this.pokemons$ = this.http.get("http://localhost:3000/products")
  }
}
