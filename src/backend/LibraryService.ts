import * as LibraryDAO from './LibraryDAO';

export async function listAllUsers() {
  return(await LibraryDAO.readAll());
}

export function registerUser(data) {
  LibraryDAO.register(data);
}

export function deleteUser(data) {
  LibraryDAO.deleteUser(data);
}
