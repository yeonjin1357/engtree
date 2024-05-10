"use client";

import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onClose}>확인</button>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
