/**
 * Created by shyshenok on 19.12.2017.
 */
import {Component, Injectable, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Author, AuthorStoreService} from "../../model/author-store-service";
import {Book, BookStoreService} from "../../model/book-store-service";

@Component({
  selector: 'author-screen',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

@Injectable()
export class AuthorComponent implements OnInit, OnDestroy {

  author: Author;
  authorBooks: Array<Book>;
  private sub: any;

  constructor(router: Router, protected authorStore: AuthorStoreService, protected bookStore: BookStoreService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let authorName = params['authorName'];

      this.author = this.authorStore.authors().find(value => value.author == authorName);
      this.authorBooks = this.bookStore.books().filter(b => b.author == this.author.author);

      console.log("this.author " + this.author.author);

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
