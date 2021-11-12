import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex justify-center items-center px-4 min-h-screen contatext-clr-grayish-blueiner">
        {/* CARD */}
        <div className="rounded shadow md:max-w-2xl text-clr-bookmark-grey card bg-clr-grayish-blue">
          {/* HEADER */}
          <header className="px-9 py-8">
            <h1 className="pb-4 text-xl card__title text-clr-primary-cyan">
              Join our community
            </h1>
            <h2 className="pb-4 font-bold card__subtitle text-clr-primary-bright-yellow">
              30-day, hassle-free money back guarantee
            </h2>
            <div className="card__copy">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </div>
          </header>
          {/* COL-1 */}
          <div className="flex flex-col md:flex-row card__bottom">
            <div className="flex flex-col flex-1 gap-4 p-9 md:rounded-bl text-clr-grayish-blue bg-clr-primary-cyan card__col">
              <h2 className="text-xl font-semibold">Monthly Subscription</h2>
              <div className="flex flex-row gap-2 items-center card__price">
                <span className="inline-block text-3xl font-bold">$29</span>
                <p>per month</p>
              </div>
              <div className="copy">Full access for less than $1 a day</div>
              <button className="py-2 rounded shadow-xl btn bg-clr-primary-bright-yellow">
                Sign Up
              </button>
            </div>
            {/* COL-2 */}
            <div className="flex flex-col flex-1 gap-4 p-9 rounded-b md:rounded-b-none md:rounded-br text-clr-grayish-blue bg-clr-primary-cyan-light card__col">
              <h2 className="text-xl font-semibold">Why Us</h2> Tutorials by
              industry experts Peer &amp; expert code review Coding exercises
              Access to our GitHub repos Community forum Flashcard decks New
              videos every week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
