import { Router } from "express";
import { userController } from "../controllers/user.controller";

const routes = Router();

routes.use('/users', userController);

export { routes };