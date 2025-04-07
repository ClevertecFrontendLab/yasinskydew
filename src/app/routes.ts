import { createBrowserRouter } from 'react-router';

import App from './App';
import About from './pages/About';
import Home from './pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
        ],
    },
]);
