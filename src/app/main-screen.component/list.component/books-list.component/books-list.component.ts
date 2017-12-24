/**
 * Created by shyshenok on 19.12.2017.
 */
import {Component, Injectable, OnDestroy, OnInit} from "@angular/core";
import {ListComponent} from "../list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Book, BookStoreService} from "../../../model/book-store-service";

@Component({
  selector: 'books-list.component',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

@Injectable()
export class BooksListComponent extends ListComponent implements OnInit, OnDestroy {

  genre:string;
  author:string;
  private sub: any;

  books: Array<Book>;


  constructor(router: Router, protected bookStore: BookStoreService, private route: ActivatedRoute) {
    super(router);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.genre = params['genreName'];
      this.author = params['authorName'];

      let books = this.bookStore.books()

      console.log(books)

      if (this.genre !== undefined) {
        books = books.filter(b => b.genre == this.genre);
      }

      if (this.author !== undefined) {
        books = books.filter(b => b.author == this.author);
      }

      this.books = books;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
