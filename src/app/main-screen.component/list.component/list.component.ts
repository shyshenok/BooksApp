/**
 * Created by shyshenok on 19.12.2017.
 */
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {



  constructor(protected router: Router) {}

}
