import { Router } from "express";
import * as messageController from "../controllers/messageController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", messageController.newMessageGet);
newMessageRouter.post("/", messageController.newMessagePost);

export default newMessageRouter;
