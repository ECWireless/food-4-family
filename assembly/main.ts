import { logging } from "near-sdk-as";
import {
  User,
  UserIdsList,
  users,
  displayUserIds,
} from "./model";

// USERS

// Creates new User
export function setUser(accountId: string, username: string): void {
	let newUser = new User(username);
	logging.log(
		'Saving username "' + username + '" for account "' + accountId + '"'
	);
	users.set(accountId, newUser);
	setGlobalUserid(accountId);
}

// Gets specific User data
export function getUser(accountId: string): User | null {
	if (users.contains(accountId)) {
		let user = users.getSome(accountId);
		return user
	}
	return null
}

// Sets new User into User List
function setGlobalUserid(id: string): void {
	let userIdList = getGlobalUserIds();
	userIdList.push(id);
	let newList = new UserIdsList(userIdList);
	displayUserIds.set("global", newList);
}

// Gets all User IDs in User List
export function getGlobalUserIds(): Array<string> {
	let userIdList = displayUserIds.get("global");
	if (!userIdList) {
	  return new Array<string>();
	}
	return userIdList.id;
}

// Deletes new User into User List
export function deleteGlobalUser(id: string): void {
	const userIdList = getGlobalUserIds();
	for (let i = 0; i < userIdList.length; i++) {
	  if (id == userIdList[i]) {
		userIdList.splice(i, 1);
	  }
	}
	let newList = new UserIdsList(userIdList);
	logging.log(
		'Deleting username "' + id + '" from blockchain'
	);
	displayUserIds.set("global", newList);
	users.delete(id);
}

// Gets all Users
export function getAllUsers(): Array<User> {
	let allUsersList = new Array<User>();
	let userIdList = getGlobalUserIds();

	for (let i: i32 = 0; i < userIdList.length; i++) {
		let user = users.getSome(userIdList[i]);
		allUsersList.push(user);
	}
	
	return allUsersList;
}
