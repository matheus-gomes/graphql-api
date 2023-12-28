import { Inject, Service } from "typedi";
import { UserRepository } from "../database/repository/user.repository";
import { IUser } from "../interfaces/user.interface";

@Service()
export class UserService {
    constructor(
        @Inject()
        private userRepository: UserRepository
    ) {}

    create({ name, login, password }: IUser) {
        return this.userRepository.create({ name, login, password });
    }

    getAll() {
        return this.userRepository.getAll();
    }

    getById(id: string) {
        return this.userRepository.getById(id);
    }
}