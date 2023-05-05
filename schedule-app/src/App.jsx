import { useState } from "react";
import "./App.css";
import SelectTime from "./componets/SelectTime";
import Table from "./componets/Table"

function App() {
  const [sTime, setSTime] = useState("9:00");
  const [eTime, setETime] = useState("12:00");
  const [resultTime, setResultTime] = useState([]);

  const handleTime = (e, callback) => {
    callback(e.target.value);
  };

  const addTimeToResult = () =>{
    const temp = {
      start : sTime,
      end : eTime
    }
    setResultTime([...resultTime, temp]);
  }

  const removeTimeFromResult = (index) =>{
    const temp = resultTime;
    temp.splice(index, 1);
    setResultTime([...temp]);
  }

  return (
    <>
      <h1>Schedule Assistant</h1>
      <div>

        <SelectTime
          defaultTime="9:00"
          setTime={setSTime}
          handleTime={handleTime}
        />
        <span> ~ </span>
        <SelectTime
          defaultTime="12:00"
          setTime={setETime}
          handleTime={handleTime}
        />
        <span> </span>
        <button id="add-button" onClick={() => addTimeToResult()}>追加</button>
      </div>
      <div>
        <Table resultTime={resultTime} removeData={removeTimeFromResult} />
      </div>
    </>
  );
}

export default App;
