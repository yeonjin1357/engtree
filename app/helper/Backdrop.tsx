"use client";

import React from "react";
import ReactDOM from "react-dom";

type BackdropProps = {
  isOpen: boolean;
};

const Backdrop: React.FC<BackdropProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(<div></div>, document.getElementById("backdrop")!);
};

export default Backdrop;
