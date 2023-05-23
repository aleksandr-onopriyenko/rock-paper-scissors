import React, { useState } from "react";

import "./style.scss";

interface PopupProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="popup-trigger" onClick={openPopup}>
        {trigger}
      </div>

      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <div className="front">
              <button className="close-button" onClick={closePopup}>
                &#x2715;
              </button>
              {children}
            </div>
            <div className="back" />
          </div>
        </div>
      )}
    </>
  );
};
