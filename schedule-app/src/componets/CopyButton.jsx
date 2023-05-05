import React from "react";

function CopyButton() {
  const copyButton = () => {
    let txt = document.querySelector("#time-table").innerText;
    const replacedTxt = txt.replace(/削除/g, "");
    console.log(replacedTxt);
    navigator.clipboard.writeText(replacedTxt);
  };
  return (
    <>
      <button id='copy-button' onClick={() => copyButton()}>コピー</button>
    </>
  );
}

export default CopyButton;
