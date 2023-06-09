import React from "react";

function Table({ resultTime, removeData }) {
  return (
    <>
      <table id="time-table">
        <thead>
          <tr>
            <th>開始</th>
            <th>終了</th>
          </tr>
        </thead>
        <tbody>
          {resultTime.map((t, index) => {
            return tableData(index, t);
          })}
        </tbody>
      </table>
    </>
  );

  function tableData(index, t) {
    return (
      <tr id="table-data-tr" key={index}>
        <td>{t.start}</td>
        <td>{t.end}</td>
        <td id="remove-button">
          <button onClick={() => removeData(index)}>削除</button>
        </td>
      </tr>
    );
  }
}

export default Table;
