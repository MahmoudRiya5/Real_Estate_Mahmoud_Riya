import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const ContactButton = ({ buttonLabel, buttonType, toTarget, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);

    if (toTarget) {
      navigate(toTarget);
    }
  };

  return (
    <button
      className="mr-contact-button"
      type={buttonType}
      onClick={handleClick}
    >
      <span className="button">{buttonLabel}</span>
    </button>
  );
};

export default ContactButton;
