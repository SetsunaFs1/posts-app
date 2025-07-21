import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store';

export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

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
