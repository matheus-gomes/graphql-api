import { buildSchema } from "graphql";
import Container from "typedi";
import { UserService } from "../services/user.service";
import { graphqlHTTP } from "express-graphql";
import { IUser } from "../interfaces/user.interface";

const schema = buildSchema(`
    input UserInput {
        name: String
        login: String
        password: String
    }
    type User {
        id: ID
        name: String
        login: String
    }
    type Query {
        getAll: [User]
        getById(id: String): User
    }
    type Mutation {
        create(input: UserInput): Boolean
    }
`);

const userService = Container.get(UserService);

const root = {
    getAll: () => {
        return userService.getAll();
    },
    getById: ({ id }: any) => {
        return userService.getById(id);
    },
    create: async ({ input }: { input: IUser}) => {
        await userService.create(input);

        return true;
    }
};

const api = graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
});

export { api };