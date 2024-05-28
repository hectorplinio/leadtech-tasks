import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../usecases/registerUser.usecase';
import { userSchema } from './userSchema';
import * as yup from 'yup';
import container from '../container';

interface UserControllerProps {
  registerUserUseCase: RegisterUserUseCase;
}

export class UserController {
  constructor() {}

  public async registerAndNotify(req: Request, res: Response): Promise<void> {
    try {
      const { registerUserUseCase }: UserControllerProps = container.cradle;

      await userSchema.validate(req.body);

      const { email, name } = req.body;

      const newUser = await registerUserUseCase.execute(email, name);

      if (!newUser) {
        res.status(409).json({ message: 'User already exists' });
        return;
      }

      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }
}
