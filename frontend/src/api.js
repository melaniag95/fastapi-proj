import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchData = async (year, region) => {
  const params = {};
  if (year) params.year = year;
  if (region) params.region = region;

  const response = await axios.get(`${API_BASE}/data`, { params });
  return response.data;
};
