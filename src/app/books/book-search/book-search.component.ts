import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Component({
	selector: 'app-book-search',
	templateUrl: './book-search.component.html',
	styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

	constructor(private booksService: BooksService) { }

	ngOnInit() {
	}

}
