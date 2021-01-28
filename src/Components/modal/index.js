import React from "react";
import { deactivateModal } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

export default function Modal({ children }) {
  const dispatch = useDispatch();

  const active = useSelector((state) => state.modal.isActive);
  console.log(active);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => dispatch(deactivateModal())}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
