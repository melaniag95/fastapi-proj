import React from "react";

function Button({onClick, label, btnColor, btnOutline = false, ariaLabel = label}) {
    const buttonClass = btnOutline ? `btn btn-outline-${btnColor}` : `btn btn-${btnColor}`;

    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel ? ariaLabel : label}
            className={buttonClass}>
            {label}
        </button>
    )
}

export default Button;