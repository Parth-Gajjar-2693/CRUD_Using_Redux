import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    //what action do we need in our app
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearUsers(state, action) {
      return [];
    },
  },
});

// console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser, clearUsers } = userSlice.actions;

/* splice method :
 Array.splice(start,deleteCount,item1,item2,...)
 start :> the index which to start changing array
 deleteCount :> the num of ele to remove (if it is set to 0, no ele will removed)
 item1,item2.. :>  ele to add to array starting at the start index*/
