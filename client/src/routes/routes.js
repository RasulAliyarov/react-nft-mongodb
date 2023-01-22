import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../pages/MainRoot"
import Marketplace from "../pages/Marketplace"
import Rankings from "../pages/Rankings"
import Create from "../pages/Create"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Marketplace />
            },
            {
                path: "/rankings",
                element: <Rankings />
            },
            {
                path: "/create",
                element: <Create />
            }
        ]
    }
])