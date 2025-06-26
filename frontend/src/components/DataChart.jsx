import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

function DataChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="Regione" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Percentuale" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

DataChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataChart;
