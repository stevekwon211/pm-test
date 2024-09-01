import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return <div className="modal">{children}</div>;
};

export default Modal;
