import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { fetchData } from "./api";
import Region from "./layouts/Region/Region";
import FilterInput from "./components/FilterInput/FilterInput";
import SortControls from "./components/SortControls/SortControls";
import Button from "./components/Button/Button";
import DataTable from "./components/DataTable/DataTable";
import MultiLineChart from "./components/MultiLineChart/MultiLineChart";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faChartLine } from '@fortawesome/free-solid-svg-icons'


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

  const tableIcon = <FontAwesomeIcon icon={faTable} className={styles.icon} />;
  const chartIcon = <FontAwesomeIcon icon={faChartLine} className={styles.icon} />;


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
    <>
      <Region name="header">
        <LanguageSwitcher />
      </Region>
      <main role="main">
        <Region name="content">
          <h1>{t("title")}</h1>
          <div className="app__form">
            <div className="app__form-row">
              <div className="app__filters">
                <div className="app__filters-row flex-container">
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
                </div>
              </div>
              <div className="app__sort-controls">
                  <div className="app__sort-controls-row flex-container">
                    <SortControls
                      sortBy={sortBy}
                      sortOrder={sortOrder}
                      onSortByChange={setSortBy}
                      onSortOrderChange={setSortOrder}
                    />
                  </div>
              </div>
              <div className="app__actions">
                <div className="app__actions-row flex-container justify-end">
                  <Button
                    onClick={handleFilter}
                    label={t("filter")}
                    btnColor="primary"
                  />
                  <Button
                    onClick={handleReset}
                    label={t("reset")}
                    btnColor="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="app__view-mode">
            <div className="app__view-mode-row flex-container justify-center">
              <Button
                onClick={() => setViewMode("table")}
                label={t("view_table")}
                btnColor="light"
                btnOutline={true}
                icon={tableIcon}
              />

              <Button
                onClick={() => setViewMode("chart")}
                label={t("view_chart")}
                btnColor="light"
                btnOutline={true}
                icon={chartIcon}
              />
            </div>
          </div>
          {data && data.length > 0 && (
            <div className="app__data">
              <div className="app__data-row">
                {viewMode === "table" ? (
                  <DataTable data={data} columns={columns} />
                ) : (
                  <MultiLineChart data={data} />
                )}
              </div>
            </div>
          )}
        </Region>
      </main>
    </>
  );
}

export default App;
