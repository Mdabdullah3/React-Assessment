import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home";
import ShoopingCart from "../pages/Products/Cart";
import Error from "../shared/Error";
const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shoppingCart",
                element: <ShoopingCart />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
])

export default routes;