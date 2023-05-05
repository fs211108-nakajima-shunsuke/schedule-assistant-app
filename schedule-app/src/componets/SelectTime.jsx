import React from 'react'
import  { TIMES }  from "./constant.js"
function SelectTime({defaultTime, setTime, handleTime}) {
  return (
    <>
     <select
          name="time-selector"
          onChange={(e) => handleTime(e, setTime)}
        >
           {TIMES.map((t) => {
            if (t === defaultTime) {
              return (
                <option key={t} selected>
                  {t}
                </option>
              );
            } else {
              return <option key={t}>{t}</option>;
            }
          })}
        </select>
    </>
  )
}

export default SelectTime