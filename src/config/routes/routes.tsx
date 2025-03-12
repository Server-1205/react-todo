import { createBrowserRouter } from 'react-router';
import { AboutPageLazy as AboutPage } from '../../pages/AboutPage/AboutPageLazy';
import { Layout } from '../../components/ui/Layout/Layout';
import { MainPageLazy as MainPage } from '../../pages/MainPage/MainPageLazy';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: '/about', element: <AboutPage /> },
        ],
    },
]);
