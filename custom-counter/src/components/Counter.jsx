import React from "react";
import { useCounter } from "../hooks/counterHook";
import CustomValue from "./CustomValue";
import { Helmet } from 'react-helmet-async'

export default function Counter() {
  const [count, increment, decrement, reset, setCount] = useCounter(0, 1);


  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    const elements = e.target.elements;
    const { name } = elements;
    setCount(() =>  parseInt(name.value)
    );
  }


  return (
    <>
    <Helmet>
    <title>Custom Counter hook UI</title>
    <meta name='description' content="Implementation of a counter app with a custom counter hook"/>
    <link rel="canonical" href="/" />
    </Helmet>

    <div className=" flex flex-col items-center bg-blue-100 h-screen justify-center">
      <h1 className="text-9xl text-black mb-10">{count}</h1>
      <div className="">
        <button className="button" onClick={decrement}>
          -
        </button>
        <button
          className="bg-orange-500 text-4xl rounded mx-5 px-4 py-2 font-semibold text-white hover:bg-orange-600"
          onClick={reset}
        >
          Reset
        </button>
        <button className="button" onClick={increment}>
          +
        </button>
        <CustomValue onSubmit={handleSubmit} />
      </div>
    </div>
    </>
  );
}
