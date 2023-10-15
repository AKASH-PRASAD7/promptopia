// GET (READ)

import { connectToDb } from "@utils/database";
import Prompt from "@model/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDb();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }
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

// PATCH (UPDATE)

export const PATCH = async (req, { params, body }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDb();

    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
};

// DELETE (DELETE)
export const DELETE = async (req, { params }) => {
  try {
    await connectToDb();
    await Prompt.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ message: "Prompt deleted" }), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
};
