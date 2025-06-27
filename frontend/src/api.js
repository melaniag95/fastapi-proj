import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchData = async (year, region, sortBy, sortOrder) => {
  const params = {};
  if (year) params.year = year;
  if (region) params.region = region;
  if (sortBy) params.sort_by = sortBy;
  if (sortOrder) params.sort_order = sortOrder;

  const response = await axios.get(`${API_BASE}/data`, { params });
  return response.data;
};
