import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <p>Modal Content</p>
      </div>
    </div>
  );
};

export default Modal;
