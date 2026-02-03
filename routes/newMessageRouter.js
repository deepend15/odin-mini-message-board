import { Router } from "express";
import { messages } from "./indexRouter.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", { title: "New Message" });
});

newMessageRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
    id: messages.length + 1,
  });
  res.redirect("/");
});

export default newMessageRouter;
