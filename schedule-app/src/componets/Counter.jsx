import React, { useReducer } from "react";

const initialState = {
  count: 0,
  count2: 10

};

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return { count: state.count + 1 , count2: state.count2};
    case "DECREMENT":
      return { count: state.count - 1 };
    case "DOUBLE_INCRE":
      return { count: state.count * 2 };
    case "RESET":
      return { count: 0 };
    default :
    return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Counter</h2>
      <h3>カウント：{state.count}</h3>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("DOUBLE_INCRE")}>×</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>

      <h2>Counter2</h2>
      <h3>カウント：{state.count2}</h3>
    </div>
  );
}

export default Counter;
