import { useEffect, useState } from "react";
import { fetchData } from "./api";
import FilterInput from "./components/FilterInput";
import Button from "./components/Button";
import DataTable from "./components/DataTable";

function App() {
  const [data, setData] = useState([]);
  const [anno, setAnno] = useState("");
  const [regione, setRegione] = useState("");


  const columns = [
    { key: "Anno", label: "Anno" },
    { key: "Regione", label: "Regione" },
    { key: "Percentuale", label: "Percentuale (%)" },
  ];


  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const handleFilter = async () => {
    const filtered = await fetchData(anno, regione);
    setData(filtered);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dati sovraffollamento abitativo 2004 - 2011</h1>
      <div style={{ marginBottom: "1rem" }}>
        <FilterInput
          label="Anno"
          type="number"
          value={anno}
          onChange={(e) => setAnno(e.target.value)}
          placeholder="Inserisci anno"
        />
        <FilterInput
          label="Regione"
          value={regione}
          onChange={(e) => setRegione(e.target.value)}
          placeholder="Inserisci regione"
        />
        <Button
          onClick={handleFilter}
          label="Filtra"
        />
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;
