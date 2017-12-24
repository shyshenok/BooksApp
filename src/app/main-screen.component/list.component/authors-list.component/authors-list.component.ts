/**
 * Created by shyshenok on 19.12.2017.
 */
import {Component} from "@angular/core";
import {ListComponent} from "../list.component";
import {Router} from "@angular/router";
import {Author, AuthorStoreService} from "../../../model/author-store-service";
import {Book, BookStoreService} from "../../../model/book-store-service";

@Component({
  selector: 'author-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorListComponent extends ListComponent {

  authors: Array<Author>;
  authorBooks: Array<Book>;
  selected: number = -1;

  constructor(router: Router, protected authorStore: AuthorStoreService,protected bookStore: BookStoreService) {
    super(router);
    this.authors = authorStore.authors();
  }

  openDropdown(index: number) {
    if (this.selected === index) {
      this.selected = -1;
      this.authorBooks = [];
    } else {
      this.selected = index;
      this.authorBooks = this.bookStore.books().filter(b => b.author == this.authors[index].author);
    }
  }

}
