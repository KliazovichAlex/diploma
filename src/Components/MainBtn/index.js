import React from "react";
import "./style.css";

export default function MainBtn({ text }) {
  return (
    <div>
      <input type="button" className="sub_btn" value={text} />
    </div>
  );
}
