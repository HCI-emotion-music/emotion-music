import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page";
import ResultPage from "../pages/result-page";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/main",
        element: <MainPage />,
    },
    {
        path: "/result",
        element: <ResultPage />,
    },
]);

export default routes;