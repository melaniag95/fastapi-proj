import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useState } from 'react';

function MultiLineChart({ data }) {
  const { t } = useTranslation();

  const [selectedRegions, setSelectedRegions] = useState([]);

  const allRegions = [...new Set(data.map(item => item.Regione))];
  const years = [...new Set(data.map(item => item.Anno))].sort();

  const groupedData = years.map(year => {
    const yearData = { Anno: year };
    data.forEach(item => {
      if (item.Anno === year) {
        yearData[item.Regione] = item.Percentuale;
      }
    });
    return yearData;
  });

  const colorPalette = [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
    '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
    '#393b79', '#637939', '#8c6d31', '#843c39', '#7b4173',
    '#3182bd', '#f33', '#6baed6', '#9e9ac8', '#e6550d'
  ];

  const handleRegionChange = (e) => {
    const value = e.target.value;
    setSelectedRegions(prev =>
      prev.includes(value)
        ? prev.filter(r => r !== value)
        : [...prev, value]
    );
  };

  const visibleRegions = selectedRegions.length > 0 ? selectedRegions : allRegions;

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>{t("filter_region")}</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
          {allRegions.map(region => (
            <label key={region} style={{ fontSize: '0.9rem' }}>
              <input
                type="checkbox"
                value={region}
                checked={visibleRegions.includes(region)}
                onChange={handleRegionChange}
              />
              {' '}{region}
            </label>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={groupedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="Anno" />
          <YAxis />
          <Tooltip
            wrapperStyle={{ zIndex: 1000 }}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Legend />
          {visibleRegions.map((region, index) => (
            <Line
              key={region}
              type="monotone"
              dataKey={region}
              stroke={colorPalette[index % colorPalette.length]}
              dot={false}
              name={region}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

MultiLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Anno: PropTypes.number.isRequired,
      Regione: PropTypes.string.isRequired,
      Percentuale: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MultiLineChart;