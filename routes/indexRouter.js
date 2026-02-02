import { Router } from "express";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("App.");
});
indexRouter.get("/{*splat}", (req, res) => {
  throw new CustomNotFoundError("Page not found.");
});

export default indexRouter;
