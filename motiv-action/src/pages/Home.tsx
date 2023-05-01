import * as React from "react";
import { useFamousQuote } from "@/store/famous/hooks";
import { getRandomFamousQuotes } from "@/db/famousQuotes";
import { FamousActions } from "@/store/famous/actions";
import Card from "@/components/Card/Card";

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
      {famousState && <Card famousQuote={famousState} />}
    </div>
  );
};
