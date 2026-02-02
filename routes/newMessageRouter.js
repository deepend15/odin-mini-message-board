import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.send("New message.");
});

export default newMessageRouter;
