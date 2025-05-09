import React from "react";
import { CounterTwoProps } from "./CounterTwo.types";

const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>

      <button onClick={props.handleIncrement}>Increment</button>

      <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterTwo;
