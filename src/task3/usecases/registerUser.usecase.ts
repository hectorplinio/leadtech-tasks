import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  name: string;
  email: string;
}

export class RegisterUserUseCase {
  private users: Array<User> = [];

  public async execute(email: string, name: string): Promise<User> {
    const userExists = this.users.find((user) => user.email === email);

    if (userExists) {
      return;
    }

    const newUser = { id: uuidv4(), name, email };
    this.users.push(newUser);

    return newUser;
  }
}
