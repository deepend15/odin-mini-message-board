import express from "express";
const app = express();
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import { CustomNotFoundError } from "./errors/CustomNotFoundError.js";

app.use("/new", newMessageRouter);
app.use("/", indexRouter);

// 404 error
app.use((req, res, next) => {
  next(new CustomNotFoundError("Page not found."));
});

app.use((err, req, res, next) => {
  console.error(err);
  if (err.statusCode) {
    res.status(err.statusCode).send(`${err.statusCode} Error: ${err.message}`);
  } else {
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}.`);
});
