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
          {resultTime.map((t) => {
            return (
              <tr key={t}>
                <td>{t.start}</td>
                <td>{t.end}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
