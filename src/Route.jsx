import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./UserLayout";
import Home from './Pages/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element: <UserLayout />,
        children: [
            { path: '/', element: <Home /> },
            
        ]
    }
]);

export default router
