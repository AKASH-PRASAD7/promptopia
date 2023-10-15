import { connectToDb } from "@utils/database";
import Prompt from "@model/prompt";

export const GET = async (req) => {
  try {
    await connectToDb();
    const prompt = await Prompt.find().populate("creator");

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
};
