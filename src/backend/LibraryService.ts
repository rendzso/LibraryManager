import * as LibraryDAOUsers from './LibraryDAOUsers';
import * as LibraryDAOStuffs from './LibraryDAOStuffs';

export async function listAllUsers(data) {
  return(await LibraryDAOUsers.readAll(data));
}

export function registerUser(data) {
  LibraryDAOUsers.register(data);
}

export function deleteUser(data) {
  LibraryDAOUsers.deleteUser(data);
}

export function updateUser(data) {
  LibraryDAOUsers.updateUser(data);
}

export async function listAllStuffs(data) {
  return(await LibraryDAOStuffs.readAll(data));
}

export function addNewStuff(data) {
  LibraryDAOStuffs.addNewStuff(data);
}

export function rentAStuff(user, stuff) {
  LibraryDAOUsers.rentAStuff(user, stuff);
}

export function backAStuff(user, stuff) {
  LibraryDAOUsers.backAStuff(user, stuff);
}

export async function listOfLateness() {
  return(await LibraryDAOUsers.listOfLateness());
}

export async function listOfRentedStuffs() {
  return(await LibraryDAOUsers.listOfRentedStuffs());
}

export async function countByUser(user) {
  return(await LibraryDAOUsers.countByUser(user));
}
