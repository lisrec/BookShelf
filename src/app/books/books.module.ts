import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksService } from './shared/books.service';

@NgModule({
	imports: [
		BooksRoutingModule,
		CommonModule
	],
	declarations: [BookSearchComponent, BookDetailsComponent],
	providers: [BooksService]
})
export class BooksModule { }
