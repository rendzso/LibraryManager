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
  if ((await LibraryDAOStuffs.exists(data.stuffID)) === 1) {
    return 'The ID is already exists!';
  } else {
    LibraryDAOStuffs.addNewStuff(data);
    return 'Stuff is added!';
  }
}

export async function rentAStuff(user, stuff) {
  if ((await LibraryDAOUsers.exists(user)) === 1 && (await LibraryDAOUsers.notDeleted(user)) === 0 && ((await LibraryDAOStuffs.exists(stuff)) === 1) && (await LibraryDAOStuffs.isRented(stuff) === 1) && (await LibraryDAOUsers.countByUser(user)) < 3) {
    LibraryDAOUsers.rentAStuff(user, stuff);
    return 'Rent is OK!';
  } else {
    return 'The user does not exists, or the stuff does not exists, or already rented, or reached the maximum item!';
  }
}

export async function backAStuff(user, stuff) {
  if ((await LibraryDAOUsers.exists(user)) === 1 && ((await LibraryDAOStuffs.exists(stuff)) === 1) && (await LibraryDAOStuffs.isRented(stuff) === 0)) {
    LibraryDAOUsers.backAStuff(user, stuff);
    return 'The stuff is backed.';
  } else {
    return 'User does not exists, or stuff does not exists, or the stuff is not rendet!';
  }
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
