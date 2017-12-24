import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";


import {AppComponent} from "./app.component";
import {MainScreenComponent} from "./main-screen.component/main-screen.component";
import {ListComponent} from "./main-screen.component/list.component/list.component";
import {AuthorComponent} from "./main-screen.component/author.component/author.component";
import {BookComponent} from "./main-screen.component/book.component/book.component";
import {AuthorListComponent} from "./main-screen.component/list.component/authors-list.component/authors-list.component";
import {BooksListComponent} from "./main-screen.component/list.component/books-list.component/books-list.component";
import {GenresListComponent} from "./main-screen.component/list.component/genres-list.component/genres-list.component";
import {ButtonMenuComponent} from "./main-screen.component/button-menu.component/button-menu.component";
import {BookStoreService} from "./model/book-store-service";
import {GenreStoreService} from "./model/genre-store-service";
import {AuthorStoreService} from "./model/author-store-service";


export const appRoutes: Routes = [

  {
    path: '', component: MainScreenComponent,
    children: [
      {
        path: 'authors', component: AuthorListComponent, // /authors
        children: [
          {path: ':authorName', component: AuthorComponent}, // /authors/:authorId

          { path: ':authorName/books', component: BooksListComponent}, // /authors/:authorId/books


        ]
      },
      {
        path: 'books', component: BooksListComponent, // /books
        children: [
          {path: ':bookName', component: BookComponent}, // /books/:bookId
        ]
      },
      {
        path: 'genres', component: GenresListComponent, // /genres/:genreName
        children: [
          {path: ':genreName/books', component: BooksListComponent}, // /genres/:genreName/books
        ]
      }
    ]

  },

];


@NgModule({
  declarations: [
    AppComponent, MainScreenComponent,
    AuthorComponent, BookComponent, AuthorListComponent,
    BooksListComponent, GenresListComponent, ButtonMenuComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [BookStoreService, GenreStoreService, AuthorStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
