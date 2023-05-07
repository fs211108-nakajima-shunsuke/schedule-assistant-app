import { useState } from "react";
import "./App.css";
import SelectTime from "./componets/SelectTime";
import Table from "./componets/Table";
import CopyButton from "./componets/CopyButton"

function App() {
  const [sTime, setSTime] = useState("9:00");
  const [eTime, setETime] = useState("9:30");
  const [resultTime, setResultTime] = useState([]);

  const handleTime = (e, callback) => {
    callback(e.target.value);
  };

  const addTimeToResult = () => {
    const temp = {
      start: sTime,
      end: eTime,
    };
    setResultTime([...resultTime, temp]);
    advanceSTimePrevETime();
  };

  const advanceSTimePrevETime = ()=>{
    const temp = eTime;
    setSTime(temp);
  }

  const removeTimeFromResult = (index) => {
    const temp = resultTime;
    temp.splice(index, 1);
    setResultTime([...temp]);
  };

  return (
    <>
      <h1>スケジュール アシスタント</h1>
      <div className="select-area">
        <h2>空いている時間帯を選択してください</h2>
        <SelectTime
          defaultTime={sTime}
          setTime={setSTime}
          handleTime={handleTime}
        />
        <span> ~ </span>
        <SelectTime
          defaultTime={eTime}
          setTime={setETime}
          handleTime={handleTime}
        />
        <button id="add-button" onClick={() => addTimeToResult()}>
          追加
        </button>
      </div>
      <div id="table-and-copy">
        <Table resultTime={resultTime} removeData={removeTimeFromResult} />
        <CopyButton />
      </div>
      
    </>
  );
}

export default App;
