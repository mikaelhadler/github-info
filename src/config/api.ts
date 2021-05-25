import _axios from "axios";
import { envs } from "./envs";

export const API = _axios.create({
  baseURL: envs.baseUrl,
  timeout: 5000,
});
