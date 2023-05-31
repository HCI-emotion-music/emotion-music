import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/main",
        element: <MainPage />,
    },
]);

export default routes;