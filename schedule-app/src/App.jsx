import { useState } from "react";
import "./App.css";
import Counter from "./componets/Counter";

function App() {
  const [sTime, setSTime] = useState("9:00");
  const [eTime, setETime] = useState("12:00");
  const times = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];
  const handleTime = (e, callback) => {
    console.log(e.target.value);
    callback(e.target.value);
  };
  
  return (
    <>
      <h1>Schedule Assistant</h1>
      <div>
        <p>
          午前中の空き時間 {sTime} ~ {eTime}{" "}
        </p>
        <select
          name="morning-start-time"
          id="morning-time"
          onChange={(e) => handleTime(e, setSTime)}
        >
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <span> ~ </span>

        <select
          name="morning-end-time"
          id="morning-time"
          onChange={(e) => handleTime(e, setETime)}
        >
          {times.map((t) => {
            if (t === "12:00") {
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


        {/* <Counter /> */}
      </div>
    </>
  );
}

export default App;
