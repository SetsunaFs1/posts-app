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
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <AllPostsPage />,
            },
            {
                path: '/posts/:id',
                element: <SinglePostPage />,
            },
            {
                path: '/albums/:id/photos',
                element: <PhotosPage />,
            },
        ],
    },
    {
        path: '/users/:id',
        element: <UsersLayout />,
        children: [
            {
                path: '/users/:id/posts',
                element: <UserPostPage />,
            },
            {
                path: '/users/:id/albums',
                element: <AlbumsPage />,
            },
            {
                path: '/users/:id/todos',
                element: <TodosPage />,
            },
        ],
    },
]);
