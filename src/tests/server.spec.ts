import * as request from 'supertest';
import app from '../task3/app';

describe('Server Initialization', () => {
  let server: any;

  beforeAll((done) => {
    const PORT = 4000;
    server = app.listen(PORT, () => {
      console.log(`Test server running on port ${PORT}`);
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should respond to POST /register with status 201 and valid body', async () => {
    const response = await request(app)
      .post('/register')
      .send({ email: 'test@example.com', name: 'Test User' })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.name).toBe('Test User');
  });

  it('should return 400 for validation error on POST /register', async () => {
    const response = await request(app)
      .post('/register')
      .send({ email: 'invalidemail', name: '' })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.message).toBeDefined();
  });
});
