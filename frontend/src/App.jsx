import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { fetchData } from "./api";
import FilterInput from "./components/FilterInput";
import SortControls from "./components/SortControls";
import Button from "./components/Button";
import DataTable from "./components/DataTable";
import MultiLineChart from "./components/MultiLineChart";
import LanguageSwitcher from "./components/LanguageSwitcher";


function App() {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [anno, setAnno] = useState("");
  const [regione, setRegione] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("table");


  const columns = [
    { key: "Anno", label: t("year")},
    { key: "Regione", label: t("region")},
    { key: "Percentuale", label: t("percentage") },
  ];


  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const handleFilter = async () => {
    const filtered = await fetchData(anno, regione, sortBy, sortOrder);
    setData(filtered);
  };

  const handleReset = async () => {
    setAnno("");
    setRegione("");
    setSortBy("");
    setSortOrder("asc");
    const allData = await fetchData();
    setData(allData);
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
        <SortControls
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortByChange={setSortBy}
          onSortOrderChange={setSortOrder}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button
          onClick={handleFilter}
          label={t("filter")}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button
          onClick={handleReset}
          label={t("reset")}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setViewMode("table")} aria-label={t("view_table")}>
          {t("view_table")}
        </button>
        <button onClick={() => setViewMode("chart")} aria-label={t("view_chart")}>
          {t("view_chart")}
        </button>
      </div>
      {viewMode === "table" ? (
        <DataTable data={data} columns={columns} />
      ) : (
        <MultiLineChart data={data} />
      )}
    </div>
  );
}

export default App;
