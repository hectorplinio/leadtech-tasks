import { Request, Response } from 'express';
import container from '../task3/container';
import { asValue } from 'awilix';
import { UserController } from '../task3/controller/user.controller';

jest.mock('../task3/usecases/registerUser.usecase');

const registerUserUseCaseMock = {
  execute: jest.fn(),
};

container.register({
  registerUserUseCase: asValue(registerUserUseCaseMock),
});

const requestMock = {
  body: {
    email: 'test@example.com',
    name: 'Test User',
  },
  container: {
    cradle: container.cradle,
  },
} as unknown as Request;

const responseMock = {
  status: jest.fn().mockImplementation(() => responseMock),
  json: jest.fn(),
} as unknown as Response;

describe('UserController', () => {
  let userController: UserController;

  beforeEach(() => {
    userController = new UserController();
  });

  afterEach(() => jest.clearAllMocks());

  it('should register and notify a user successfully', async () => {
    registerUserUseCaseMock.execute.mockResolvedValueOnce({
      id: '1234',
      email: 'test@example.com',
      name: 'Test User',
    });

    await userController.registerAndNotify(requestMock, responseMock);

    expect(responseMock.status).toHaveBeenCalledWith(201);
    expect(responseMock.json).toHaveBeenCalledWith({
      id: '1234',
      email: 'test@example.com',
      name: 'Test User',
    });
  });

  it('should return 409 if user already exists', async () => {
    registerUserUseCaseMock.execute.mockResolvedValueOnce(undefined);

    await userController.registerAndNotify(requestMock, responseMock);

    expect(responseMock.status).toHaveBeenCalledWith(409);
    expect(responseMock.json).toHaveBeenCalledWith({
      message: 'User already exists',
    });
  });

  it('should return 400 for validation error', async () => {
    const req = {
      body: {},
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await userController.registerAndNotify(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });
  });

  it('should return 500 for internal server error', async () => {
    registerUserUseCaseMock.execute.mockRejectedValueOnce(
      new Error('Internal error'),
    );

    await userController.registerAndNotify(requestMock, responseMock);

    expect(responseMock.status).toHaveBeenCalledWith(500);
    expect(responseMock.json).toHaveBeenCalledWith({
      message: 'Internal Server Error',
    });
  });
});
