"use client";
import { useState, useEffect, ReactNode } from "react";
import clsx from "clsx";
import Icon from "@/components/core/icon/icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title = "Modal",
  children,
  showCloseButton = true,
  className,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50",
        isOpen ? "flex items-center justify-center bg-primary/50 backdrop-blur-md" : "hidden"
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={clsx(
          "bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-lg relative",
          "max-h-[90vh] overflow-y-auto",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close modal"
          >
            <Icon name="close" />
          </button>
        )}
        {title && (
          <h2 className="text-xl font-bold text-primary mb-4">{title}</h2>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;