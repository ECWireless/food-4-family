import { logging, storage } from "near-sdk-as";
import {
  User,
} from "./model";

export function getUser(accountId: string): User | null {
  return storage.get<User>(accountId, null);
}

export function setUser(accountId: string, username: string): void {
  let newUser = new User(username);
  logging.log(
    'Saving username "' + username + '" for account "' + accountId + '"'
  );
  storage.set(accountId, newUser);
}
