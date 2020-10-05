import { 
    context,
    PersistentMap,
} from "near-sdk-as";

// AUTHORS
// Class for each User
@nearBindgen
export class User {
    sender: string;
    username: string;
  
    constructor(username: string) {
        this.sender = context.sender;
        this.username = username;
    }
}

// Class for creating a list of Users
@nearBindgen
export class UserIdsList {
  constructor(public id: Array<string>) {}
}

// Storage collection for each new User; Key being the users accoundId
export const users = new PersistentMap<string, User>("users");

// Storage collection for the list of Users; only stores users' accoundId
export const displayUserIds = new PersistentMap<string, UserIdsList>("showAuthors");

// RECIPES
// Class for each Recipe
@nearBindgen
export class Recipe {
    id: string;
    author: string;
    title: string;
    ingredients: string;
    instructions: string;
  
    constructor(title: string, ingredients: string, instructions: string) {
        this.id = context.sender + title.toLowerCase();
        this.author = context.sender;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

// Class for creating a list of Recipes
@nearBindgen
export class RecipeIdsList {
  constructor(public id: Array<string>) {}
}

// Storage collection for each new Recipe; Key being the users accoundId
export const recipes = new PersistentMap<string, Recipe>("recipes");

// Storage collection for the list of Recipes; only stores recipes' id
export const displayRecipeIds = new PersistentMap<string, RecipeIdsList>("showRecipes");
