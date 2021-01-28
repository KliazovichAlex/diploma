import React from "react";
import "./style.css";

export default function Card({ label, text }) {
  return (
    <div className="card">
      <div className="front">
        <h1>{label}</h1>
      </div>
      <div className="back">
        <h1>{label}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
