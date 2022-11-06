import React from "react";
import { useReducer } from "react";
import CustomValue from "../components/CustomValue";
import { Helmet } from 'react-helmet-async'

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

export default function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const reset = () => {
    dispatch({ type: ACTIONS.RESET });
  };
  return (
    <>
     <Helmet>
      <title>useReducer Counter Page</title>
      <meta
        name="description"
        content="Implementation of a counter app with the useReducer React hook"
      />
      <link rel="canonical" href="/useReducerCounter" />
    </Helmet>

    <div className="flex flex-col items-center justify-center bg-orange-100 h-screen">
      <h1 className="text-9xl mb-10">{state.count}</h1>
      <div>
        <button className="button" onClick={decrement}>
          -
        </button>
        <button
          className="bg-orange-500 text-4xl rounded mx-5 px-4 py-2 font-bold text-white hover:bg-orange-600 "
          onClick={reset}
        >
          Reset
        </button>
        <button className="button" onClick={increment}>
          +
        </button>
        {/* <CustomValue onSubmit={setValue} /> */}
      </div>
    </div>
    </>
    );
}
