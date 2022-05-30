import React from "react";
import Person1 from "../../images/person1.jpg";
const Account = (props) => {
  return (
    <div>
      <div className="flex flex-row w-6/12 justify-around mb-3  items-center ">
        <img src={Person1} className="w-2/12  rounded-full" alt="profilepic" />
        <div className="flex flex-col">
          <h3 className="font-bold">charlie D' Amelio</h3>
          <p className="text-sm text-gray-400">charliedAmelio SP884</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
