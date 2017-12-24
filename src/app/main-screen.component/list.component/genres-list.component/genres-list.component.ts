/**
 * Created by shyshenok on 19.12.2017.
 */
import { Component } from '@angular/core';
import {ListComponent} from "../list.component";
import {Router} from "@angular/router";
import {Genre, GenreStoreService} from "../../../model/genre-store-service";

@Component({
  selector: 'genres-list.component',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent extends ListComponent {

  genres: Array<Genre>;

  constructor(router: Router, protected genreStore: GenreStoreService) {
    super(router);
    this.genres = genreStore.genres();
  }

}
