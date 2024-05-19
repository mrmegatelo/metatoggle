const API_URL = process.env.PUBLIC_API_BASE || "http://localhost:3001";

/**
 * Fetches all flags
 * @returns {Promise<any>}
 */
export function fetchFlags() {
  const url = new URL("/api/flags", API_URL);
  const request = new Request(url, {
    method: "GET",
    ...buildHeaders(),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

/**
 * Fetches the flag with the given id
 * @param id
 * @returns {Promise<any>}
 */
export function fetchFlag(id) {
  const url = new URL(`/api/flags/${id}`, API_URL);
  const request = new Request(url, {
    method: "GET",
    ...buildHeaders(),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

/**
 * Creates a new flag
 * @param flag
 * @returns {Promise<any>}
 */
export function createFlag(flag) {
  const url = new URL("/api/flags", API_URL);
  const request = new Request(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(flag),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

/**
 * Deletes the flag with the given id
 * @param id
 * @returns {Promise<any>}
 */
export function deleteFlag(id) {
  const url = new URL(`/api/flags/${id}`, API_URL);
  const request = new Request(url, {
    method: "DELETE",
    headers: buildHeaders(),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

/**
 * Updates the flag with the given id
 * @param id
 * @param flag
 * @returns {Promise<any>}
 */
export function updateFlag(id, flag) {
  const url = new URL(`/api/flags/${id}`, API_URL);
  const request = new Request(url, {
    method: "PUT",
    headers: buildHeaders(),
    body: JSON.stringify(flag),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

export function login(credentials) {
  const url = new URL("/api/auth/login", API_URL);
  const request = new Request(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(credentials),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

export function logout() {
  const url = new URL("/api/auth/logout", API_URL);
  const request = new Request(url, {
    method: "POST",
    headers: buildHeaders(),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

export function register(credentials) {
  const url = new URL("/api/auth/register", API_URL);
  const request = new Request(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(credentials),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((json) => json.data);
}

/**
 * Builds the headers for the request
 * @param additionalHeaders
 * @returns {Headers}
 */
function buildHeaders(additionalHeaders = {}) {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  Object.entries(additionalHeaders).forEach(([key, value]) => {
    headers.set(key, value);
  });
  return headers;
}
