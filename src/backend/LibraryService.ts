import * as LibraryDAO from './LibraryDAOUsers';

export async function listAllUsers(data) {
  return(await LibraryDAO.readAll(data));
}

export function registerUser(data) {
  LibraryDAO.register(data);
}

export function deleteUser(data) {
  LibraryDAO.deleteUser(data);
}

export function updateUser(data) {
  LibraryDAO.updateUser(data);
}
