import { 
    context,
    PersistentMap,
} from "near-sdk-as";

// Class for each user
@nearBindgen
export class User {
    sender: string;
    username: string;
  
    constructor(username: string) {
        this.sender = context.sender;
        this.username = username;
    }
}

// Class for creating a list of users
@nearBindgen
export class UserIdsList {
  constructor(public id: Array<string>) {}
}

// Storage collection for each new user; Key being the users accoundId
export const users = new PersistentMap<string, User>("users");

// Storage collection for the list of users; only stores users' accoundId
export const displayUserIds = new PersistentMap<string, UserIdsList>("show");
