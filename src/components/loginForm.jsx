import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Joi from "joi";
import SignUp from "./signup";
import Login2 from "./login2";
import ImageUpload from './ImageUpload';
import axios  from 'axios';
function Login({Display}){
  const [page,setPage] = useState('emailPage');
  let [errors, setErrors] = useState({ email: "", password: "" });
  let [account, setAccount] = useState({ email: "", password: "" });
  const handleSubmit = async(e) => {
    e.preventDefault();
    let data = {
      email:account.email,
      password:account.password
    }
    await axios.post('http://localhost:4000/user/login',data,{withCredentials: true})
               .then(res => res)
               .then(data => {
                console.log(data);
                setPage('imageUpload')
               })
  };
  var schema = Joi.object({
    email: Joi.string()
      .min(5)
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).max(15).required(),
  });
  const changePage = (page) => {
    setPage(page);
   }
  const validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    let schem = Joi.object({ [input.name]: schema.extract(input["name"]) });
    const errors = schem.validate(obj, { abortEarly: false });
    if(errors.error)  return errors.error.details[0];
     else return {};
  };
  const handleChange = ({ currentTarget: input }) => {
    const errors1 = { ...errors };
    const account1 = { ...account };
    let errorMessage = validateProperty(input);
    account1[input.name] = input.value;
    if (errorMessage) errors1[input.name] = errorMessage;
    else delete errors1[input.name];
    setAccount(account1);
    setErrors(errors1);
  };
  if(page === 'emailPage'){
    return (
      <div className="w-4/12 border-2 h-5/6 flex flex-col justify-around ml-36 rounded-lg  fixed bg-white top-20   shadow-xl">
        <div className="w-10/12 ml-auto mr-auto flex justify-end">
          <FontAwesomeIcon
            className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
            icon={faClose}
            onClick={Display}
          />
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Log in</h1>
          <form
            className="flex flex-col justify-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <div className="flex ml-10 items-center justify-between w-10/12">
                <h3 className="ml-8">Email or username</h3>
                <small
                  className="ml-11 hover:underline hover:cursor-pointer"
                  onClick={() => changePage("login")}
                >
                  Log in with Phone
                </small>
              </div>
              <div className="w-10/12 flex flex-col bg-gray-100 border-2 h-12 m-auto items-center ">
                <input
                  type="email"
                  name="email"
                  value={account["email"]}
                  placeholder="Email or username"
                  className="w-full indent-2 rounded-sm  h-full"
                  onChange={handleChange}
                />
              </div>
                {errors.email.message && (<div class="h-8 m-auto w-10/12 rounded-md text-red-500 bg-red-200">{errors.email.message}</div>)}
            </div>
            <div>
              <div className="w-10/12 flex flex-col bg-gray-100 border-2 h-12 ml-auto mr-auto mt-4 items-center ">
                <input
                  type="password"
                  name="password"
                  value={account["password"]}
                  placeholder="Password"
                  className="w-full indent-2 rounded-sm  h-full"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errors.password.message && (<div class="h-8 m-auto w-10/12 rounded-md text-red-500 bg-red-200">{errors.password.message}</div>)}
            </div>
            <small className="ml-14 hover:underline hover:cursor-pointer">
              Forgot Password?
            </small>
            <input
              disabled={errors.email.message || errors.password.message}
              type="submit"
              value="Log in"
              className="w-10/12 h-12 font-bold border-2 rounded-sm m-auto"
            />
          </form>
        </div>
        <div className="h-10 text-center border-t-2 border-gray-300">
          <p>
            Don't have account?
            <strong
              className="text-red-600 font-bold hover:cursor-pointer"
              onClick={() => changePage("signup")}
            >
              Sign Up
            </strong>
          </p>
        </div>
      </div>
    )
  }else if(page === "signup"){
    return(
      <SignUp Display={Display} changePage={changePage}/>
    )
  }
  else if(page === "login"){
    return(
      <Login2 Display={Display} changePage={changePage}/>
    )
  }
  else if(page === 'imageUpload'){
    return(
      <ImageUpload Display={Display} changePage={changePage}/>
    )
  }
}
export default Login;