import { context, logging } from "near-sdk-as";
import {
	User,
	UserIdsList,
	users,
	displayUserIds,
	Recipe,
	RecipeIdsList,
	recipes,
	displayRecipeIds,
} from "./model";

// AUTHORS
// Creates new User
export function setUser(accountId: string, username: string): void {
	let newUser = new User(username);
	logging.log(
		'Saving username "' + username + '" for account "' + accountId + '"'
	);
	users.set(accountId, newUser);
	setGlobalUserIds(accountId);
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
function setGlobalUserIds(id: string): void {
	let userIdList = getGlobalUserIds();
	userIdList.push(id);
	let newList = new UserIdsList(userIdList);
	displayUserIds.set("globalAuthors", newList);
}

// Gets all User IDs in User List
export function getGlobalUserIds(): Array<string> {
	let userIdList = displayUserIds.get("globalAuthors");
	if (!userIdList) {
	  return new Array<string>();
	}
	return userIdList.id;
}

// Deletes new User in Users List
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
	displayUserIds.set("globalAuthors", newList);
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

// RECIPES
// Creates new Recipe
export function setRecipe(title: string, ingredients: string, instructions: string): void {
	let newRecipe = new Recipe(title, ingredients, instructions);
	let newRecipeId = context.sender + title.toLowerCase()
	logging.log(
		'Saving recipe "' + title + '" for account "' + context.sender + '"'
	);
	recipes.set(newRecipeId, newRecipe);
	setGlobalRecipeId(newRecipeId);
}

// Gets specific Recipe data
export function getRecipe(recipeId: string): Recipe | null {
	if (recipes.contains(recipeId)) {
		let recipe = recipes.getSome(recipeId);
		return recipe
	}
	return null
}

// Sets new Recipe into Recipes List
function setGlobalRecipeId(id: string): void {
	let recipeIdList = getGlobalRecipeIds();
	recipeIdList.push(id);
	let newList = new RecipeIdsList(recipeIdList);
	displayRecipeIds.set("globalRecipes", newList);
}

// Gets all Recipe IDs in Recipes List
export function getGlobalRecipeIds(): Array<string> {
	let recipeIdList = displayRecipeIds.get("globalRecipes");
	if (!recipeIdList) {
	  return new Array<string>();
	}
	return recipeIdList.id;
}

// Deletes new Recipe in Recipes List
export function deleteGlobalRecipe(id: string): void {
	const recipeIdList = getGlobalRecipeIds();
	for (let i = 0; i < recipeIdList.length; i++) {
	  if (id == recipeIdList[i]) {
		recipeIdList.splice(i, 1);
	  }
	}
	let newList = new RecipeIdsList(recipeIdList);
	logging.log(
		'Deleting recipe "' + id + '" from blockchain'
	);
	displayRecipeIds.set("globalRecipes", newList);
	recipes.delete(id);
}

// Gets all Recipes
export function getAllRecipes(): Array<Recipe> {
	let allRecipesList = new Array<Recipe>();
	let recipeIdList = getGlobalRecipeIds();

	for (let i: i32 = 0; i < recipeIdList.length; i++) {
		let recipe = recipes.getSome(recipeIdList[i]);
		allRecipesList.push(recipe);
	}
	
	return allRecipesList;
}
