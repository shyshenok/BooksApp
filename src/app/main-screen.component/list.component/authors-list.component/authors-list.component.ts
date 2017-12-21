/**
 * Created by shyshenok on 19.12.2017.
 */
import { Component } from '@angular/core';
import {ListComponent} from "../list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'author-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorListComponent extends ListComponent {
  constructor(router: Router) {
    super(router);
  }

  goToAuthor() {
    this.router.navigate(['/authors/author']);
  }
  goToBook () {
    this.router.navigate(['/authors/book']);
  }
}
