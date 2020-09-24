import { context } from "near-sdk-as";

@nearBindgen
export class User {
    sender: string;
    username: string;
  
    constructor(username: string) {
        this.sender = context.sender;
        this.username = username;
    }

    login():string {
        return this.username;
    }
}
