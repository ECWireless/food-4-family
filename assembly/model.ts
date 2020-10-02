import { 
    context,
    PersistentMap,
} from "near-sdk-as";

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
export const displayUserIds = new PersistentMap<string, UserIdsList>("show");
