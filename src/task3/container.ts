import { asClass, createContainer } from 'awilix';
import { RegisterUserUseCase } from './usecases/registerUser.usecase';
import { UserController } from './controller/user.controller';

const container = createContainer();

container.register({
  registerUserUseCase: asClass(RegisterUserUseCase).scoped(),
  userController: asClass(UserController).scoped(),
});

export default container;
