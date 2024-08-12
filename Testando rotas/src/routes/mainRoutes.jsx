import App from "../App"

const { createBrowserRouter } = require("react-router-dom");


const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <App/>
        )
    }
])
export default mainRoutes