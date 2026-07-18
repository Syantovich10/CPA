const BASE_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      ...options.headers,
    },
  })

  if (!response.ok) {
    const body = await response.json().catch(() => null)
    const error = new Error(body?.message || `API error: ${response.status}`)
    error.status = response.status
    throw error
  }

  return response.json()
}

export function get(path, options) {
  return request(path, options)
}

export function post(path, body, options) {
  return request(path, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  })
}
