import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
const postAdapter = createEntityAdapter();
const initialState = postAdapter.getInitialState();
const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        setPosts: postAdapter.setAll,
    },
});
export const { setPosts } = postSlice.actions;
export const { selectAll: selectAllPosts, selectById: selectPostById } = postAdapter.getSelectors((state) => state.postSlice);
export const postReducer = postSlice.reducer;
