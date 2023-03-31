import axios from "axios";
import { apiURL } from "./constants";
const api = axios.create({ baseUrl: `${apiURL}/` });
 async function Submit(data,changePage) {
  await api
    .post(`${apiURL}/user/signup`, data)
    .then((res) => res)
    .then((data) => {
      console.log(data.data.data);
      changePage('login')
    })
    .catch((err) => {
      console.log(err);
    });
}
export default Submit;