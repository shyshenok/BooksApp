/**
 * Created by shyshenok on 20.12.2017.
 */
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})
export class ButtonMenuComponent {


  constructor(private router: Router) {}

  goToBookList() {
    this.router.navigate(['/books']);
  }
  goToAuthorsList() {
    this.router.navigate(['/authors']);
  }
  goToGenresList() {
    this.router.navigate(['/genres']);
  }

}
