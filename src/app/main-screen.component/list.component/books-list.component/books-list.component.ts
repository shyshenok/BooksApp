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
  private sub: any;

  books: Array<Book>;

  constructor(router: Router, protected bookStore: BookStoreService, private route: ActivatedRoute) {
    super(router);
    this.books = bookStore.books();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.genre = params['genreName'];

      console.log("Genre: ", this.genre)

      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToBook() {
    this.router.navigate(['/books/book']);
  }

}
