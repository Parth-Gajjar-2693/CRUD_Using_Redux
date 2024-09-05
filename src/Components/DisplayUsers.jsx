import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../Store/Slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="userDisplay">
      {data.map((user, id) => {
        return (
          <li
            key={id}
            className="w-[636px] border-t-2 last:border-b-2 flex items-center justify-between p-[1rem]"
          >
            {user}
            <button
              className=" text-red-600 text-2xl opacity-50 hover:opacity-100 transition-opacity duration-300 
             "
              onClick={() => deleteUser(id)}
            >
              <MdDeleteForever />
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
