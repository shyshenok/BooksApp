/**
 * Created by shyshenok on 22.12.2017.
 */
import {Injectable} from "@angular/core";

export class Author {
  author: string;
  biography: string;
}
@Injectable()
export class AuthorStoreService {

  authors(): Array<Author> {
    return [{
      "author": "Marijn Haverbeke",
      "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
    },
      {
        "author": "Addy Osmani",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      },
      {
        "author": "Axel Rauschmayer",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      },
      {
        "author": "Eric Elliott",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      },
      {
        "author": "Nicholas C. Zakas",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      },
      {
        "author": "Kyle Simpson",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      },
      {
        "author": "Richard E. Silverman",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      },
      {
        "author": "Glenn Block, et al.",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et facilis laborum nemo nulla quos saepe sit tempore veniam voluptatum. Atque corporis est fugiat nihil nulla quis ratione tenetur, voluptatem?",
      }]
  }
}
