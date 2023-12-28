import bcrypt from "bcrypt";
import { config } from "dotenv";

const SALT_ROUNDS = 10;

config();

bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
    bcrypt.hash(process.env.CRYPT_PASSWORD as string, salt, function(err, hash) {
        console.log(hash);
    });
});