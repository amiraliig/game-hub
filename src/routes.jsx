import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import GameDetailsPage from "./Pages/GameDetailsPage";
import React from "react";
import ErrorPage from "./Pages/ErrorPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "games/:slug", element: <GameDetailsPage /> }
        ]
    }
])
export default router;