import { createSlice } from "@reduxjs/toolkit";

export const actionTypes = {
  SET_USER: 'SET_USER'
};

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null },

  reducer: (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  },
})

export const {reducer} = userSlice.actions

export default userSlice.reducer;
