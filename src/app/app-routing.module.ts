import { BooksComponent } from './books/books.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'products', component: ProductComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
