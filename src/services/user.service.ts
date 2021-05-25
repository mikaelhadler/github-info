import { API } from "../config/api";

export const getUsetByUsername = (username: string) => {
  return API.get(`/users/${username}`)
    .then((data) => data)
    .catch((error) => {
      return error.response.message;
    });
};
