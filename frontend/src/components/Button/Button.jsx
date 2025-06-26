import React from "react";

function Button({ onClick, label, btnColor, btnOutline = false, ariaLabel = label, icon }) {
  const baseClass = 'btn';
  const colorClass = btnOutline ? `btn--outline-${btnColor}` : `btn--${btnColor}`;
  const iconClass = icon ? 'btn--has-icon' : '';

  const buttonClass = `${baseClass} ${colorClass} ${iconClass}`.trim();

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={buttonClass}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{label}</span>
    </button>
  );
}


export default Button;
