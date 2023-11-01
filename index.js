import express from "express";
import * as jokesRoutes from "./server/routes/jokesRoutes.js";
import mongodbConfig from "./server/config/mongodb.js";

const app = express();
mongodbConfig();

app.use(express.json());
app.use(jokesRoutes.router);

app.listen(8080);
