import { messages } from "../routes/indexRouter.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = messages.find((message) => message.id === Number(messageId));

  if (!message) throw new CustomNotFoundError("Message not found.");

  res.render("message", { title: "Message", message: message });
}

export { getMessageById };
