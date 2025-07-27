import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    tagTypes: ['Albums'],
    endpoints: (builder) => ({
        getAlbumsByUserId: builder.query({
            query: (userId) => `/users/${userId}/albums`,
            providesTags: ['Albums'],
        }),
        getPhotos: builder.query({
            query: (albumId) => `/albums/${albumId}/photos`,
            providesTags: ['Albums'],
        }),
    }),
});
export const { useGetAlbumsByUserIdQuery, useGetPhotosQuery } = albumsApi;
