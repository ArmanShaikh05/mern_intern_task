import { useEffect } from "react";
import ReactDom from "react-dom";

const Modal = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="bg-black/50 w-full h-screen fixed top-0 left-0 z-[999]" />
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[999] flex items-center justify-center">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
