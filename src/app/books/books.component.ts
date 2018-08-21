import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.books = window['books'];
    this.http.get('/api/books').subscribe(books => {
      this.books = books;
    })
  }
}
