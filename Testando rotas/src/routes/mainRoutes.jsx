import Home from "../pages/Home/Home"
import Contato from "../pages/Contato/Contato"
import Produtos from "../pages/Produtos/Produtos"
import Sobre from "../pages/Sobre/Sobre"

import { createBrowserRouter } from "react-router-dom";


const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Home/>
        )
    },
    {
        path: '/contato',
        element: (
            <Contato/>
        )
    },
    {
        path: '/produtos',
        element: (
            <Produtos/>
        )
    },
    {
        path: '/sobre',
        element: (
            <Sobre/>
        )
    }
])
export default mainRoutes