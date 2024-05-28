import * as express from 'express';
import { UserController } from './controller/user.controller';
import container from './container';

interface UserControllerProps {
  userController: UserController;
}

const app = express();
app.use(express.json());

const { userController }: UserControllerProps = container.cradle;

app.post('/register', (req, res) => userController.registerAndNotify(req, res));

export default app;
