import React from "react";

function FilterInput({label, type = "text", value, onChange, placeholder = ""}) {
    return (
        <div style={{ margin: "0.5rem 0" }}>
            <label
                htmlFor={label}>
                {label}
            </label>
            <input
                name={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                />
        </div>
    );
}

export default FilterInput;