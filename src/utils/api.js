const baseUrl = "http://localhost:3001";

const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function getItems() {
  return fetch(`${baseUrl}/items`, { method: "GET" }).then(checkServerResponse);
}

export function addItems({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkServerResponse);
}

export function deleteCards(_id) {
  return fetch(`${baseUrl}/items/${_id}`, { method: "DELETE" }).then(
    checkServerResponse
  );
}
