import * as db from "../db/queries.js";
import { body, validationResult, matchedData } from "express-validator";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

async function allMessagesGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
}

async function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);

  if (message.length === 0) throw new CustomNotFoundError("Message not found.");

  res.render("message", { title: "Message", message: message[0] });
}

function newMessageGet(req, res) {
  res.render("form", { title: "New Message" });
}

const userErr = "must be 25 characters or less.";
const messageErr = "must be 255 characters or less.";

const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 25 })
    .withMessage(`Username ${userErr}`),
  body("message")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage(`Message ${messageErr}`),
];

const newMessagePost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: "New message",
        errors: errors.array(),
      });
    }
    const { username, message } = matchedData(req);
    await db.addMessage(username, message);
    res.redirect("/");
  },
];

export { allMessagesGet, getMessageById, newMessageGet, newMessagePost };
