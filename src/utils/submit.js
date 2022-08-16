import axios from "axios";
const api = axios.create({ baseUrl: "https://tiktak-bapp.herokuapp.com/" });
 async function Submit(data,changePage) {
  await api
    .post("https://tiktak-bapp.herokuapp.com/user/signup", data)
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