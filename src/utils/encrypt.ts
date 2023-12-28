import bcrypt from "bcrypt";
import { Service } from "typedi";

@Service()
export class Encrypt {
    async cryptPassword(password: string) {
        return bcrypt.hash(password, process.env.CRYPT_HASH as string);
    }
}