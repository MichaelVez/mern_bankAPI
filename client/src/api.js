import axios from "axios";
let url = "http://localhost:3000/user";
if (process.env.NODE_ENV === "production") {
  url = "/user";
}
export const userAPI = axios.create({
  baseURL: url,
});
