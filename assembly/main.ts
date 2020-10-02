import { context, logging, storage, PersistentVector, PersistentMap } from "near-sdk-as";
import {
  User,
  UsersList,
  users,
  displayUsers,
  Recipe,
} from "./model";

// Users
export function setUser(accountId: string, username: string): void {
	let newUser = new User(username);
	logging.log(
		'Saving username "' + username + '" for account "' + accountId + '"'
	);
	// users.set(accountId, newUser);
	users.set(accountId, newUser);
	setGlobalUser(accountId);
}

function setGlobalUser(id: string): void {
	let userIdList = getGlobalUser();
	userIdList.push(id);
	let newList = new UsersList(userIdList);
	displayUsers.set("global", newList);
}

function getGlobalUser(): Array<string> {
	let userIdList = displayUsers.get("global");
	if (!userIdList) {
	  return new Array<string>();
	}
	return userIdList.id;
}

export function deleteGlobalUser(id: string): void {
	const userIdList = getGlobalUser();
	for (let i = 0; i < userIdList.length; i++) {
	  if (id == userIdList[i]) {
		userIdList.splice(i, 1);
	  }
	}
	let newList = new UsersList(userIdList);
	logging.log(
		'Deleting username "' + id + '" from blockchain'
	);
	displayUsers.set("global", newList);
	users.delete(id);
}

export function getUser(accountId: string): User | null {
	if (users.contains(accountId)) {
		let user = users.getSome(accountId);
		return user
	}
	return null
}

export function getUsersIdList(): Array<string> {
	let userIdList = displayUsers.get("global");
	if (!userIdList) {
	  	return new Array<string>();
	}
	return userIdList.id;
}
