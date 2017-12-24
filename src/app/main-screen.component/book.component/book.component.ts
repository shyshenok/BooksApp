/**
 * Created by shyshenok on 19.12.2017.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Book, BookStoreService} from "../../model/book-store-service";

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  book: Book;
  private sub: any;

  constructor(protected bookStore: BookStoreService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let bookName = params['bookName'];

      this.book = this.bookStore.books().find(book => book.title == bookName);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
