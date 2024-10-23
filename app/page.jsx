import Feed from '@components/Feed'; 

function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover & Share
                <br className="" />
                <span className="orange_gradient text-center">AI Powered Promts</span>
            </h1>
            <p className="desc text-center">Promptopia is an open source AI Prompting tool to share create and discover creative AI Prompts.  </p>

            {/* Feed */}
            <Feed/>

        </section>
    );
}

export default Home;