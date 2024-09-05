import React from "react";
import { clearUsers } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearUsers());
  };

  return (
    <div className=" w-1/2 m-auto">
      <button
        className="flex items-center ml-[40%] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-3"
        onClick={deleteUsers}
      >
        Clear All User
      </button>
    </div>
  );
};

export default DeleteAllUser;
