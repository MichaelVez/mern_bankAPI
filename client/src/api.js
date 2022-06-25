import axios from "axios";
let url = "http://localhost:5050/user";
if (process.env.NODE_ENV === "production") {
  url = "/user";
}
export const userAPI = axios.create({
  baseURL: url,
});
