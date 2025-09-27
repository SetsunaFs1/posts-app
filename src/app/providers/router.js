import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../shared/layouts/MainLayout';
import AllPostsPage from '../../pages/AllPostsPage';
import AlbumsPage from '../../pages/AlbumsPage';
import SinglePostPage from '../../pages/SinglePostPage';
import TodosPage from '../../pages/TodosPage';
import UserPostPage from '../../pages/UserPostsPage';
import PhotosPage from '../../pages/PhotosPage';
import UsersLayout from '../../shared/layouts/UsetrsLayout/UsersLayout';
export const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(MainLayout, {}),
        children: [
            {
                index: true,
                element: _jsx(AllPostsPage, {}),
            },
            {
                path: '/posts/:id',
                element: _jsx(SinglePostPage, {}),
            },
            {
                path: '/albums/:id/photos',
                element: _jsx(PhotosPage, {}),
            },
        ],
    },
    {
        path: '/users/:id',
        element: _jsx(UsersLayout, {}),
        children: [
            {
                path: '/users/:id/posts',
                element: _jsx(UserPostPage, {}),
            },
            {
                path: '/users/:id/albums',
                element: _jsx(AlbumsPage, {}),
            },
            {
                path: '/users/:id/todos',
                element: _jsx(TodosPage, {}),
            },
        ],
    },
]);
