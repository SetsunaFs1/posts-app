import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store';
import type { UserType } from './userType';

const userAdapter = createEntityAdapter<UserType>();
const initialState = userAdapter.getInitialState();

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setUsers: userAdapter.setAll,
    },
});

export const { setUsers } = userSlice.actions;

export const { selectAll: selectAllUsers, selectById: selectUserById } =
    userAdapter.getSelectors<RootState>((state: RootState) => state.userSlice);

export const userReducer = userSlice.reducer;
