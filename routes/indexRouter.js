import { Router } from "express";
import { getMessageById } from "../controllers/messageController.js";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
});

indexRouter.get("/message/:messageId", getMessageById);

export { messages, indexRouter };
