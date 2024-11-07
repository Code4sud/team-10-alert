import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import {HomeScreen} from "./screens/unauth/home.screen";
import {ChartScreen} from "./screens/auth/chart.screen";
import Navbar from "./components/Navbar";
import  DashboardScreen  from "./screens/auth/dashboard.screen";
import  ScenariosScreen  from "./screens/auth/scenarios.screen";
import {Outlet} from "react-router-dom";
import ManageScenarioScreen from "@/screens/auth/managescenario.screen";


const MainLayout = () => (
    <>
        <Header />
        <div className='flex h-full p-4 w-full gap-4 mt-20'>
            <Navbar />
            <Outlet />
        </div>
    </>
);

const authRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div className="text-white">Erreur 404 ! Page non trouvée</div>,
        children: [
            { index: true, element:  <DashboardScreen /> },
            { 
                path: '/chart', element: <ChartScreen />
            },
            {
                path: '/scenarios', element: <ScenariosScreen />
            },
            {
                path: '/scenarios/:id', element: <ManageScenarioScreen />
            }

        ],
    },
]);

const unauthRouter = createBrowserRouter([
    {
        path: '/',
        element: <><Header /><Outlet /></>,
        errorElement: <div className="text-white">Erreur 404 ! Page non trouvée</div>,
        children: [
            { index: true, element: <HomeScreen /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={authRouter} />;
}

export default App;
