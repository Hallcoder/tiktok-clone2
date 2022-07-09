import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import Select1 from "./select";
import Submit from "../utils/submit"
import { FormHelperText } from "@mui/material";
import Joi from "joi";
function SignUp({ Display, changePage }) {
  const[errors,setErrors] = useState({email:'',username:'',password:'',cpassword:{},year:'',month:'',day:''})
  const[account,setAccount] = useState({
    email:'hallcoder25@gmail.com',
    password:'!!!?!?123Abana',
    cpassword:'!!!?!?123Abana',
    year:'2002',
    month:'April',
    username:'zesta',
    day:'18'
  })
  const schema = Joi.object({
    email: Joi.string()
    .min(5)
    .email({ tlds: { allow: false } })
    .required(),
  username:Joi.string().required().max(20),
  password: Joi.string().min(6).max(15).required(),
  cpassword:Joi.string().min(6).max(15).required()

  })
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const years = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961,
    1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007
  ];
 const validateProperty = (input) => {
  const obj = {[input.name]:input.value};
  let schem = Joi.object({[input.name]:schema.extract(input["name"])});
  const {error} = schem.validate(obj)
  return error ? error:{};
 }
 const handleSelectChange = (e) => {
 v
 }
 const handleChange = ({currentTarget:input})=>{
   const errors1 = {...errors};
   const account1 ={...account};
  if(input.name === 'cpassword' ) {
      errors1['cpassword'].message = (input.value !== account.password) ? "Passwords don't match":'';
      account1['cpassword'] = input.value;
      setAccount(account1);
      setErrors(errors1);
      console.log("Errors set",errors);
  }else{
    const errorMessage = validateProperty(input);
    if(errorMessage) errors1[input.name] = errorMessage
    else delete errors1[input.name];
    account1[input.name] = input.value;
    setErrors(errors1);
    setAccount(account1);
  }
  console.log(account)
  }
  const handleSubmit = (e) =>{
  e.preventDefault();
  let data = {
    email:account.email,
    username:account.username,
    password:account.password
  }
  Submit(data,changePage)
  }
  const{email,password,username,cpassword,year,month,day} = account;
  return (
    <div className="w-4/12 border-2 h-5/6 flex flex-col justify-around ml-36 rounded-lg  fixed bg-white top-14   shadow-xl">
      <div className="w-10/12 ml-auto mr-auto flex justify-between">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="font-bold font-sans text-2xl p-4 h-6 w-6 hover:cursor-pointer"
        />
        <FontAwesomeIcon
          className="font-bold font-sans text-2xl bg-gray-100 rounded-full p-4 h-6 w-6 hover:cursor-pointer"
          icon={faClose}
          onClick={Display}
        />
      </div>
      <div className="mt-0">
        <h1 className="text-center font-bold text-2xl">Sign up</h1>
        <form className="flex flex-col justify-around" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-row justify-around">
            <Select1 data={months} name='month' value={month}  onChange={handleSelectChange} label={"month"}  />
            <Select1 data={days} name='day' value={day} onChange={handleSelectChange} label={"day"} />
            <Select1 data={years} name='year' value={year} onChange={handleSelectChange} label={"year"} />
          </div>
          <div className="ml-10">
            <FormHelperText className="w-9/12">
              Your birthday won't be shown publicly
            </FormHelperText>
          </div>
          <div>
            <div  className="w-10/12 flex flex-col bg-gray-100 h-12 m-auto items-center ">
            <input
              type="email"
              name="email"
              value ={email}
              onChange={handleChange}
              placeholder="Email ..."
              className="w-full inline-block border-2 indent-2 rounded-sm  h-full"
            />
            </div>
            <div className='h-4/6 w-full'>
              {errors.email.message && (<div class="h-8 m-auto w-10/12 rounded-sm text-red-500 bg-red-200">{errors.email.message.match(/[^"]/g).join("")}</div>)}
            </div>
          </div>
          <div>
            <div  className="w-10/12 flex flex-col bg-gray-100 h-12 m-auto mt-4 items-center ">
            <input
              type="username"
              name="username"
              value ={username}
              onChange={handleChange}
              placeholder="username like mike@12..."
              className="w-full inline-block border-2 indent-2 rounded-sm  h-full"
            />
            </div>
            <div className='h-4/6 w-full'>
              {errors.username.message && (<div class="h-8 m-auto w-10/12 rounded-sm text-red-500 bg-red-200">{errors.username.message}</div>)}
            </div>
          </div>
          <div>
            <div className="w-10/12 flex flex-col  border-2 h-12 ml-auto mr-auto mt-4 items-center ">
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password..."
                className="w-full inline-block indent-2 rounded-sm  h-full"
              />
            </div>
               <div className='h-4/6 w-full'>
              {errors.password.message && (<div class="h-8 m-auto w-10/12 rounded-sm text-red-500 bg-red-200">{errors.password.message}</div>)}
            </div>
          </div>
          <div>
            <div className="w-10/12 flex  flex-col bg-gray-100 border-2 h-12 ml-auto mr-auto mt-4 items-center ">
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                onChange={handleChange}
                placeholder="Confirm Password..."
                className="w-full indent-2 rounded-sm  h-full"
              />
            </div>
               <div className='h-4/6 w-full'>
              {errors.cpassword.message && (<div class="h-2/6 m-auto w-10/12 rounded-sm text-red-500 bg-red-200">{errors.cpassword.message}</div>)}
            </div>
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="w-10/12 h-12 font-bold  hover:cursor-pointer mt-4 bg-red-600 text-white rounded-sm m-auto"
          />
        </form>
      </div>
      <div className="h-10 text-center border-t-2 border-gray-300">
        <p>
          Already have an account?
          <strong
            className="text-red-600 font-bold hover:cursor-pointer"
            onClick={() => changePage("login")}
          >
            Login
          </strong>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
