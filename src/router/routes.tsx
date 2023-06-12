import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import MainPage from "../pages/main-page";
import EmotionPage from "../pages/emotion-page";
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
        path: "/emotion",
        element: <EmotionPage />,
    },
    {
        path: "/result",
        element: <ResultPage />,
    },
]);

export default routes;