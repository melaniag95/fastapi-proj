import styles from "./FilterInput.module.css";

function FilterInput({label, type = "text", value, onChange, placeholder = ""}) {
    return (
        <div className={styles.formGroup}>
            <label
                htmlFor={label}>
                {label}
            </label>
            <input
                className={styles["text-input"]}
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