import { Request, Response, Router } from "express";
import Container from "typedi";
import { UserService } from "../services/user.service";

const userController = Router();

const userService = Container.get(UserService);

userController.get("/", async (req: Request, res: Response) => {
    const users = await userService.getAll();

    res.status(200).json(users);
});

userController.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const users = await userService.getById(id);

    res.status(200).json(users);
});

userController.post("/", async (req: Request, res: Response) => {
    const user = req.body;

    await userService.create(user);

    res.status(201);
});

export { userController };