import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState();
const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setUsers: userAdapter.setAll,
    },
});
export const { setUsers } = userSlice.actions;
export const { selectAll: selectAllUsers, selectById: selectUserById } = userAdapter.getSelectors((state) => state.userSlice);
export const userReducer = userSlice.reducer;
