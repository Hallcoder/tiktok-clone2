import React from "react";
import Person1 from "../../images/person1.jpg";
const Account = ({name,followers,pic}) => {
  return (
    <div>
      <div className="flex flex-row w-6/12 justify-around mb-3  items-center ">
        <img src={pic} className="w-2/12  rounded-full" alt="profilepic" />
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-400">{followers}</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
