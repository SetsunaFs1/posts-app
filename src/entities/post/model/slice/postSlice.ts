import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store';
import type { PostType } from './postTypes';

const postAdapter = createEntityAdapter<PostType>();
const initialState = postAdapter.getInitialState();

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        setPosts: postAdapter.setAll,
    },
});

export const { setPosts } = postSlice.actions;

export const { selectAll: selectAllPosts, selectById: selectPostById } =
    postAdapter.getSelectors<RootState>((state: RootState) => state.postSlice);

export const postReducer = postSlice.reducer;
