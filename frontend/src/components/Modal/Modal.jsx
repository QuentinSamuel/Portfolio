import "./Modal.css";
import { node } from "prop-types";

function Modal({ children }) {
  return <details className="modal">{children}</details>;
}
function Trigger({ children }) {
  return <summary className="modal-trigger">{children}</summary>;
}
Modal.Trigger = Trigger;

function Window({ children }) {
  return <div className="modal-window">{children}</div>;
}
Modal.Window = Window;

Modal.propTypes = {
  children: node.isRequired,
};
Trigger.propTypes = {
  children: node.isRequired,
};
Window.propTypes = {
  children: node.isRequired,
};

export default Modal;
