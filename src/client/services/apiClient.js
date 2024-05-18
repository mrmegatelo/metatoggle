const API_URL = process.env.PUBLIC_API_BASE || "http://localhost:3001";

const baseParams = {}

export function fetchFlags() {
  const url = new  URL('/api/flags', API_URL)
  return fetch(url, baseParams)
    .then((response) => response.json())
    .then((json) => json.data);
}