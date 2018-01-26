import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
	imports: [
		CommonModule,
		BooksRoutingModule
	],
	declarations: [BookSearchComponent, BookDetailsComponent]
})
export class BooksModule { }
