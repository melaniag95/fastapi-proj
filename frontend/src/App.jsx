import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { fetchData } from "./api";
import FilterInput from "./components/FilterInput";
import Button from "./components/Button";
import DataTable from "./components/DataTable";
import LanguageSwitcher from "./components/LanguageSwitcher";


function App() {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [anno, setAnno] = useState("");
  const [regione, setRegione] = useState("");

  const columns = [
    { key: "Anno", label: t("year")},
    { key: "Regione", label: t("region")},
    { key: "Percentuale", label: t("percentage") },
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
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
      <div style={{ marginBottom: "1rem" }}>
        <FilterInput
          label={t("year")}
          type="number"
          value={anno}
          onChange={(e) => setAnno(e.target.value)}
          placeholder={t("placeholder_year")}
        />
        <FilterInput
          label={t("region")}
          value={regione}
          onChange={(e) => setRegione(e.target.value)}
          placeholder={t("placeholder_region")}
        />
        <Button
          onClick={handleFilter}
          label={t("filter")}
        />
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;
