import * as React from "react";
import { useFamousQuote } from "@/store/famous/hooks";
import { getRandomFamousQuotes } from "@/db/famousQuotes";
import { FamousActions } from "@/store/famous/actions";
import Card from "@/components/ui/Card/Card";
import Testimonials from "@/components/Testimonials/Testimonials";

export const Home: React.FC = () => {
  const [famousState, dispatch] = useFamousQuote();

  React.useEffect(() => {
    let ignore = false;
    async function getRandomQuote() {
      const { randomFamousQuotes } = await getRandomFamousQuotes();
      if (ignore === false)
        dispatch({
          payload: randomFamousQuotes,
          type: FamousActions.SET_FAMOUS_QUOTE,
        });
    }
    getRandomQuote();
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  return (
    <div className="home">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-2 text-center text-2xl text-gray-900 font-bold md:text-4xl">
          Know your worth, get an advice per day
        </h1>
        {famousState && <Card famousQuote={famousState} />}
      </div>
      <hr />
      <Testimonials />
    </div>
  );
};
