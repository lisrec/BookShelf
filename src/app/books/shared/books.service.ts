import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Book } from './book';

@Injectable()
export class BooksService {

	private books: Observable<Book[]>

	constructor(private http: HttpClient) {

		this.http.get<Book[]>(`https://wolnelektury.pl/api/books/`)
			.subscribe(
				res => {
					console.log(res)
				},
				err =>  {
					console.log(err)
				})
	}


}
