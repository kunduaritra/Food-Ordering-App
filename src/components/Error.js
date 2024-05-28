import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>
        Oops!!! {err.status} {err.statusText}
      </h1>
      {/* <h3>Something went wrong! {err.error.message}</h3> */}
    </div>
  );
};

export default Error;
