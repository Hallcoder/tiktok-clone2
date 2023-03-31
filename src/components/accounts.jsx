import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {apiURL} from "../utils/constants"
import Account from './common/account';
const Accounts = () => {
    const [accounts,setAccounts] = useState([]);
    useEffect(() =>{
        axios.get(`${apiURL}/accounts`)
             .then(res =>  res)
             .then(data =>{
             setAccounts(data.data.data)
             })
             .catch(err => console.error(err))
    },[])
    return ( 
        <div className="border-b-2 text-xs mb-3">
       { accounts.map(account =>{
        return <Account pic={account.profilePicture} name={account.username} followers={account.followers.length} />
       })}
        </div>
     );
}
 
export default Accounts;