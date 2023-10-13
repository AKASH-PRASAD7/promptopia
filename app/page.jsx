import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full text-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Prompts</span>
      </h1>
      <p className="desc mx-auto text-center">
        Promptopia is an open-source AI prompting tool for creating and sharing
        creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
