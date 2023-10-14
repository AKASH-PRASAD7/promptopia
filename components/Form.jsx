import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        {type} Prompt
        <span className=" blue_gradient">{type}</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world and let your imagination
        run wild with AI-powered text generation.
      </p>
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onClick={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semiold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Enter your prompt here"
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semiold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">(#AI, #machinelearning, #react)</span>
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Enter your prompt here"
            className="form_textarea"
          />
        </label>
      </form>
    </section>
  );
};

export default Form;
