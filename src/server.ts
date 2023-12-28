import 'reflect-metadata';

import bodyParser from "body-parser";
import express from "express";
import { config } from "dotenv";

import { routes } from './routes';
import { api } from './api';

config();
require("./database/connection");

const app = express();

app.use(bodyParser.json())
app.use('/graphql', api);
app.use("/", routes);

app.listen(process.env.PORT);