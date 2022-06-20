import axios from "axios";
const api = axios.create({ baseUrl: "http://localhost:4000" });
 async function Submit(data,changePage) {
  await api
    .post("http://localhost:4000/user/signup", data)
    .then((res) => res)
    .then((data) => {
      console.log(data.data.data);
      localStorage.setItem("currentUser",JSON.stringify(data.data.data));
      changePage('login')
    })
    .catch((err) => {
      console.log(err);
    });
}
export default Submit;