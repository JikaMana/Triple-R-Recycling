// Modal.jsx
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 border-gray-400 backdrop-blur-[2px] bg-opacity-50 max-w-[90vw] mx-auto flex justify-center items-center z-50">
      <div className="bg-white rounded-xl pb-8 px-6 shadow-lg max-w-md md:max-w-2xl w-full relative">
        <button
          className="absolute top-4 right-4 text-green-700 hover:text-green-800"
          onClick={onClose}
        >
          <X size={32} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
