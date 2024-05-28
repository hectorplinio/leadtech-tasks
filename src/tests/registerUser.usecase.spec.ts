import { RegisterUserUseCase } from '../task3/usecases/registerUser.usecase';

describe('RegisterUserUseCase', () => {
  let registerUserUseCase: RegisterUserUseCase;

  beforeEach(() => {
    registerUserUseCase = new RegisterUserUseCase();
  });

  it('should register a new user successfully', async () => {
    const email = 'test@example.com';
    const name = 'Test User';

    const newUser = await registerUserUseCase.execute(email, name);

    expect(newUser).toEqual({
      id: expect.any(String),
      email,
      name,
    });
  });

  it('should return undefined if user already exists', async () => {
    const email = 'test@example.com';
    const name = 'Test User';

    await registerUserUseCase.execute(email, name);

    const newUser = await registerUserUseCase.execute(email, name);

    expect(newUser).toBeUndefined();
  });
});
