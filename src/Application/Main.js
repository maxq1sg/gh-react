import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Main = () => {
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => setData(data))
      .then((arg) => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* <div>{fib(34)}</div>
          <div>{fib(35)}</div>
          <div>{fib(36)}</div> */}
          {data.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Main;
