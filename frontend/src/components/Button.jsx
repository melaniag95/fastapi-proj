import React from "react";

function Button({onClick, label}) {
    return (
        <button
            onClick={onClick}
            aria-label={label}>
            {label}
        </button>
    )
}

export default Button;