import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        {error.status},{error.statusText}
      </p>
      <a href="/">
        <p>Back To Home</p>
      </a>
    </div>
  );
};

export default Error;
