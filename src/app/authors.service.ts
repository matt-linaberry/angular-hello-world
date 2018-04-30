import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  constructor() { }

  getAuthors() {
    // this would be where an API is called.
    return ['author1', 'author2', 'author3'];
  }
}
