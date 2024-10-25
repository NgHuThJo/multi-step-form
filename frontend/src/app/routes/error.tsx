import { Link, useRouteError } from "react-router-dom";

export function ErrorRoute() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        display: "grid",
        placeSelf: "center",
        gap: "1rem",
        fontWeight: "var(--fw-heading)",
        textAlign: "center",
      }}
    >
      {error instanceof Error ? (
        <>
          <p>{error.name}</p>
          <pre>{error.message}</pre>
        </>
      ) : (
        <h1>Something went wrong.</h1>
      )}
      <Link to="/" replace aria-label="Go to home">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}
