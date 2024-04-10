"use client";

import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // children prop 추가 (선택적)
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div>
      {children}
      <button onClick={onClose}>확인</button>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
