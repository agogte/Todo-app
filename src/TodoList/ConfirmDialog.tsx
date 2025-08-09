import React from "react";
import styles from "./ConfirmDialog.module.css";

interface ConfirmDialogProps {
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ text, onCancel, onConfirm }) => (
  <>
    <div className={styles.backdrop}></div>
    <div className={styles.confirmDialog}>
      <div className={styles.confirmText}>{text}</div>
      <div className={styles.confirmActions}>
        <button className="p-button" onClick={onCancel}>Cancel</button>
        <button className="p-button--negative" onClick={onConfirm}>Delete</button>
      </div>
    </div>
  </>
);

export default ConfirmDialog;
