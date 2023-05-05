import React from "react";

function Table({ resultTime }) {
  return (
    <>
      <table>
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
      <tr key={index}>
        <td>{t.start}</td>
        <td>{t.end}</td>
      </tr>
    );
  }
}

export default Table;
