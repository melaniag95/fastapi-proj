import React from "react";

function DataTable({ data, columns }) {
    if(!data || data.length === 0) {
        return <div style={{ padding: "1rem" }}>Nessun dato disponibile</div>;
    }

    return (
        <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "1rem" }}>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((record, idx) => (
                    <tr key={idx}>
                        {columns.map((col) => (
                            <td key={col.key}>{record[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;