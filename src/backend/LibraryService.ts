import * as LibraryDAOUsers from './LibraryDAOUsers';
import * as LibraryDAOStuffs from './LibraryDAOStuffs';

export async function listAllUsers(data) {
  return(await LibraryDAOUsers.readAll(data));
}

export async function registerUser(data) {
  if ((await LibraryDAOUsers.exists(data.userID)) === 1) {
    return 'UserID is used. Change it!';
  } else {
    LibraryDAOUsers.register(data);
    return 'User added!';
  }
}

export async function deleteUser(user) {
  if ((await LibraryDAOUsers.exists(user))  === 1 && (await LibraryDAOUsers.notDeleted(user)) === 0) {
    await LibraryDAOUsers.deleteUser(user);
    return 'User is deleted!';
  } else {
    return 'User does not exists, or already deleted!';
  }
}

export async function updateUser(data) {
  if ((await LibraryDAOUsers.exists(data.userID)) === 1 && (await LibraryDAOUsers.notDeleted(data.userID)) === 0) {
    LibraryDAOUsers.updateUser(data);
    return 'User is updated!';
  } else {
    return 'User does not exists, or deleted!';
  }
}

export async function listAllStuffs(data) {
  return(await LibraryDAOStuffs.readAll(data));
}

export async function addNewStuff(data) {
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
