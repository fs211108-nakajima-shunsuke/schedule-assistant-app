import { useState } from "react";
import "./App.css";
import SelectTime from "./componets/SelectTime";

function App() {
  const [sTime, setSTime] = useState("9:00");
  const [eTime, setETime] = useState("12:00");
  
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
       
        <SelectTime defaultTime="9:00" setTime={setSTime} handleTime={handleTime}/>
        <span> ~ </span>
        <SelectTime defaultTime="12:00" setTime={setETime} handleTime={handleTime}/>


      </div>
    </>
  );
}

export default App;
