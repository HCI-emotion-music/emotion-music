import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page";
import ResultPage from "../pages/result-page";
// import MusicPlayPage from "../pages/playMusic-page";

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
    // {
    //     path: "/playMusic",
    //     element: <MusicPlayPage />,
    // }
]);

export default routes;