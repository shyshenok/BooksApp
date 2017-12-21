/**
 * Created by shyshenok on 20.12.2017.
 */
import {Injectable} from "@angular/core";

export class Genre {
  genre: string;
}


@Injectable()
export class GenreStoreService {

  genres(): Array<Genre> {
    return [{
        "genre" : "one"
      },
      {
        "genre" : "two"
      },
      {
        "genre" : "three"
      },
      {
        "genre" : "four"
      }]
  }
}



