import { useEffect } from "react";
import Card from "@/components/Card/Card";
import NavBar from "@/components/Navbar/NavBar";
import { getRandomFamousQuotes } from "./api/famousQuotes";
import { Actions, useFamousQuote } from "./store/famousQuotes";
function App() {
  const [famousQuote, dispatchFamousQuote] = useFamousQuote();

  useEffect(() => {
    let ignore = false;
    async function getRandomQuote() {
      const { randomFamousQuotes } = await getRandomFamousQuotes();
      if (ignore === false)
        dispatchFamousQuote({
          payload: randomFamousQuotes,
          type: Actions.SET_FAMOUS_QUOTE,
        });
    }
    getRandomQuote();
    return () => {
      ignore = true;
    };
  }, [dispatchFamousQuote]);

  return (
    <div className="app">
      <NavBar />
      {famousQuote && <Card famousQuote={famousQuote} />}
    </div>
  );
}

export default App;
