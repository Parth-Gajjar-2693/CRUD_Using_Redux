import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  return (
    <>
      <div className="flex  w-1/2 items-center justify-between m-auto mt-11 ">
        <p className="text-2xl font-bold text-gray-400">List of User Details</p>

        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New User
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2 m-auto mt-5 bg-blue-50 text-sm font-normal ">
        <ul className="list">
          <DisplayUsers />
        </ul>
      </div>
      <DeleteAllUser />
    </>
  );
};

export default UserDetails;
