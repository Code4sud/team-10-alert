import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import {HomeScreen} from "./screens/unauth/home.screen";
import {ChartScreen} from "./screens/auth/chart.screen";
import Navbar from "./components/Navbar";
import  DashboardScreen  from "./screens/auth/dashboard.screen";
import  ScenariosScreen  from "./screens/auth/scenarios.screen";
import {Outlet} from "react-router-dom";


const MainLayout = () => (
    <>
        <Header />
        <Navbar />
        <Outlet /> 
    </>
);

const authRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div className="text-white">Erreur 404 ! Page non trouvée</div>,
        children: [
            { index: true, element: <HomeScreen /> },
            { 
                path: '/chart', element: <ChartScreen /> 
            
            },
            {
                path: '/dashboard', element: <DashboardScreen />

            },
            {
                path: '/scenarios', element: <ScenariosScreen />
            }

        ],
    },
]);

function App() {
    return <RouterProvider router={authRouter} />;
}

export default App;
