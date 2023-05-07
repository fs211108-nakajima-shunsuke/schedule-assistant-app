import React from "react";
import { TIMES } from "./constant.js";
function SelectTime({ defaultTime, setTime, handleTime }) {
  return (
    <>
      <select
        name="time-selector"
        value={defaultTime}
        onChange={(e) => handleTime(e, setTime)}
      >
        {TIMES.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
    </>
  );
}

export default SelectTime;
