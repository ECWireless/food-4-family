import { 
    context,
    PersistentMap,
 } from "near-sdk-as";

@nearBindgen
export class User {
    sender: string;
    username: string;
  
    constructor(username: string) {
        this.sender = context.sender;
        this.username = username;
    }
}

@nearBindgen
export class UsersList {
  constructor(public id: Array<string>) {}
}

@nearBindgen
export class Recipe {
    sender: string;
    title: string;
    ingredients: string;
    instructions: string;
  
    constructor(title: string, ingredients: string, instructions: string) {
        this.sender = context.sender;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

export const users = new PersistentMap<string, User>("users");

export const displayUsers = new PersistentMap<string, UsersList>("show");
