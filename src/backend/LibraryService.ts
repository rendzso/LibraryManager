import * as LibraryDAO from './LibraryDAO';

export function listAllUsers() {
  console.log(LibraryDAO.readAll());
}

