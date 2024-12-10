import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: {}
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setCurrentUserLikes: (state, action) => {
            state.currentUser = { ...state.currentUser, likes: action.payload };
        },
    },
});
export const { setCurrentUser, setCurrentUserLikes } = userSlice.actions;
export default userSlice.reducer;
