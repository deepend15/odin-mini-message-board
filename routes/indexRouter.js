import { Router } from "express";
import * as messageController from "../controllers/messageController.js";

const indexRouter = Router();

indexRouter.get("/", messageController.allMessagesGet);
indexRouter.get("/message/:messageId", messageController.getMessageById);

export { indexRouter };
