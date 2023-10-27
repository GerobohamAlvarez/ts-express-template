import * as crypto from "crypto";
import { ILogger } from "../../../domain/core/logger/ILogger";
import { IUserRepository } from "../../../domain/repository/user/user.repository";
import { Identity } from "../../../domain/core/types/id.type";
import { User } from "../../../domain/models/user/user";

export class InMemoryRepository implements IUserRepository {
  private _users: User[] = [
    {
      _id: "1",
      age: 18,
      email: "vetealamerda@putmail.com",
      name: "troll",
    },
  ];

  constructor(private logger: ILogger) {}

  async createUser(user: User): Promise<User> {
    user._id = crypto.randomUUID();
    this.logger.debug(`Creating new user with id: ${user._id}`);
    this._users.push(user);
    this.logger.debug(`Created new user with id: ${user._id}`);
    return user;
  }

  async deleteUser(_id: Identity): Promise<boolean> {
    const user = await this.findUserById(_id);

    if (!user) {
      this.logger.warn(`Not user with ${_id} has been found`);
      return false;
    }

    this.logger.debug(`Deleting user by id : ${_id}`);
    this._users = this._users.filter(user => {
      return user._id !== _id;
    });
    this.logger.debug(`Deleted user with id : ${_id}`);
    return Promise.resolve(true);
  }

  async findUserById(_id: Identity): Promise<User | null | undefined> {
    this.logger.debug(`Searching user by id : ${_id}`);
    return this._users.find(user => {
      return user._id === _id;
    });
  }

  async updateUser(user: User): Promise<User> {
    this.logger.debug(`Updating user with id : ${user._id}`);
    this.logger.debug(`${user}`);

    const hasBeenDeleted = await this.deleteUser(user._id);

    if (hasBeenDeleted) {
      this._users.push(user);
      this.logger.debug(`User has been updated : ${user._id}`);
    }

    return user;
  }
}
