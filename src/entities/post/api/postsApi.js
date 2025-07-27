import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => '/posts',
            keepUnusedDataFor: 1000,
            providesTags: ['Posts'],
        }),
        getPostsByUser: builder.query({
            query: (userId) => `/users/${userId}/posts`,
            providesTags: ['Posts'],
        }),
        getOnePost: builder.query({
            query: (postId) => `/posts/${postId}`,
            providesTags: ['Posts'],
        }),
    }),
});
export const { useGetAllPostsQuery, useGetPostsByUserQuery, useGetOnePostQuery, } = postsApi;
