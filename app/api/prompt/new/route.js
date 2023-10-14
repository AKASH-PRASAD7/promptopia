import { connectToDb } from "@utils/database";
import Prompt from "@model/prompt";

export const POST = async (req, res) => {
  const { userId, tag, prompt } = await req.json();

  try {
    await connectToDb();
    const newPromt = new Prompt({
      creator: userId,
      tag,
      prompt,
    });
    await newPromt.save();
    return res
      .status(201)
      .json({ message: "Prompt created successfully", prompt });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Falied to create prompt" });
  }
};
