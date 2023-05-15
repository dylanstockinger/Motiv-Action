import { useRouteError } from "react-router-dom";

type Error = {
  statusText: string;
  message: string;
};

export default function Error(): JSX.Element {
  const error = useRouteError();
  const err = error as Error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
}
