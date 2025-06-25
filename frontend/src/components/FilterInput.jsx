import React from "react";

function FilterInput({label, type = "text", value, onChange, placeholder = ""}) {
    return (
        <div style={{ margin: "0.5rem 0" }}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                />
        </div>
    );
}

export default FilterInput;