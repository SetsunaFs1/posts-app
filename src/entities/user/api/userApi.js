import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 1000,
            providesTags: ['Users'],
        }),
    }),
});
export const { useGetUsersQuery } = usersApi;
