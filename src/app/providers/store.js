import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../entities/post/api/postsApi';
import { postReducer } from '../../entities/post/model/slice/postSlice';
import { userReducer } from '../../entities/user/model/slice/userSlice';
import { usersApi } from '../../entities/user/api/userApi';
import { commentsApi } from '../../entities/comments/api/commentsApi';
import { todosApi } from '../../entities/todos/api/todosApi';
import { albumsApi } from '../../entities/albums/api/albumsApi';
export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        postSlice: postReducer,
        userSlice: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(postsApi.middleware)
        .concat(usersApi.middleware)
        .concat(commentsApi.middleware)
        .concat(todosApi.middleware)
        .concat(albumsApi.middleware),
});
