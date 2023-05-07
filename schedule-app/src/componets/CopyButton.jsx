import React from "react";

function CopyButton() {
  const copyButton = () => {
    let txt = document.querySelector("#time-table").innerText;
    const replacedTxt = txt.replace(/削除/g, "");
    navigator.clipboard.writeText(replacedTxt);

    toggleOverlay();
  };

  const toggleOverlay = () => {
    const overlay = document.getElementById("copy-overlay");
    overlay.classList.toggle("overlay-on");
    setTimeout(() => {
      overlay.classList.toggle("overlay-on");
    }, 1500);
  };

  return (
    <>
      <div>
        <button id="copy-button" onClick={() => copyButton()}>
          コピー
        </button>
        <p id="copy-overlay">コピーしました!!</p>
      </div>
    </>
  );
}

export default CopyButton;
