import axios from "axios";
const api = axios.create({ baseUrl: "http://localhost:4000" });
 async function Submit(data,changePage) {
  await api
    .post("http://localhost:4000/user/signup", data)
    .then((res) => res)
    .then((data) => {
      console.log(data.data.data);
      // changePage('imageUpload')
      changePage('login')
    })
    .catch((err) => {
      console.log(err);
    });
}
export default Submit;