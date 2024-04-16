
import React from "react";

function ConfirmBox({ open, closeDialog,title, deleteFunction }) {
  const handleClose = () => {
    closeDialog();
  };

  const handleDelete = () => {
    deleteFunction();
    closeDialog();
  };

  return (
    <div className={open ? "dialog-open" : "dialog-closed"}>
      <div className="dialog-content">
        <div className="close-button" onClick={handleClose}>
          X
        </div>
        <div className="dialog-body">
          <h5>Delete {title}</h5>
          <p>Are you sure you want to delete this {title}?</p>
        </div>
        <div className="button-container">
          <button onClick={handleClose} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;
