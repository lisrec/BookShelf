import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BookSearchComponent } from './book-search/book-search.component'
import { BookDetailsComponent } from './book-details/book-details.component'

const routes: Routes = [
	{ path: 'search', component: BookSearchComponent },
	{ path: 'details/:id', component: BookDetailsComponent },
	{ path: '**', redirectTo: 'search' }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BooksRoutingModule { }
