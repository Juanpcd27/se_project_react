import { baseUrl } from "./constants";
import { checkServerResponse } from "./api";

export function userRegistration(username, avatar, email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: username, avatar, email, password }),
  }).then(checkServerResponse);
}

export function userAuthorization(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
}
