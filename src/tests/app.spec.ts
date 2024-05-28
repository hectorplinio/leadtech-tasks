import * as request from 'supertest';
import app from '../task3/app';

describe('App', () => {
  it('should return 201 when user is successfully registered', async () => {
    const response = await request(app)
      .post('/register')
      .send({ email: 'test@example.com', name: 'Test User' })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.name).toBe('Test User');
  });

  it('should return 409 if the user already exists', async () => {
    await request(app)
      .post('/register')
      .send({ email: 'duplicate@example.com', name: 'Test User' });

    const response = await request(app)
      .post('/register')
      .send({ email: 'duplicate@example.com', name: 'Test User' })
      .expect('Content-Type', /json/)
      .expect(409);

    expect(response.body.message).toBe('User already exists');
  });

  it('should return 400 for validation error', async () => {
    const response = await request(app)
      .post('/register')
      .send({ email: 'invalidemail', name: '' })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.message).toBeDefined();
  });
});
