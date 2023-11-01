import express from "express";
import * as jokesController from "../controllers/jokesController.js";

const router = express.Router();

router.post("/api/jokes/createJokes", jokesController.createJokes);
router.get("/api/jokes/readJokes", jokesController.readJokes);
router.get("/api/jokes/getOneJoke/:idJoke", jokesController.getOneJoke);
router.put("/api/jokes/updateJoke/:idJoke", jokesController.updateJokes);
router.delete("/api/jokes/deleteJoke/:idJoke", jokesController.deleteJokes);

export { router };
