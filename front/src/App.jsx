import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header.jsx";
import {HomeScreen} from "./screens/unauth/home.screen.jsx";
import {ChartScreen} from "./screens/auth/chart.screen.jsx";

const authRouter = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        errorElement: <div>404</div>,
        children: [
            { index: true, element: <HomeScreen /> },
            { path: '/chart', element: <ChartScreen /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={authRouter} />;
}

export default App;
