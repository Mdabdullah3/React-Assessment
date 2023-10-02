import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home";
import ShoopingCart from "../pages/Products/Cart";
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
            }
        ]
    }
])

export default routes;