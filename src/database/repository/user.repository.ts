import { Inject, Service } from "typedi";
import { userModel } from "../models/user";
import { IUser } from "../../interfaces/user.interface";
import { Encrypt } from "../../utils/encrypt";

@Service()
export class UserRepository {
    @Inject()
    private encrypt: Encrypt;

    async create({
        name,
        login,
        password
    }: IUser) {        
        return userModel.create({
            name,
            login,
            password: await this.encrypt.cryptPassword(password),
        });
    }

    async getAll() {
        return userModel.find({});
    }

    async getById(id: string) {
        return userModel.findById(id);
    }
}