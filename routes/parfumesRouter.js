import { Router } from "express";
import getAllParfumes from "../controllers/getAllParfumes.js";
import getParfumeById from "../controllers/getParfumeById.js";
import createNewParfume from "../controllers/createNewParfume.js";
import deleteParfumeById from "../controllers/deleteParfumeById.js";

const parfumeRouter = new Router();

parfumeRouter.get("/", getAllParfumes);
parfumeRouter.get("/:id", getParfumeById);

// POST REQUESTS
parfumeRouter.post("/", createNewParfume);

// DELETE REQUESTS
parfumeRouter.delete("/:id", deleteParfumeById);

export default parfumeRouter;