import axios from "axios";
 async function Submit(data,changePage) {
  await axios
    .post("https://tiktak-bapp.herokuapp.com/user/signup",data,{withCredentials:true})
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