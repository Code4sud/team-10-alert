import ManageScenarioScreen from '@/screens/auth/managescenario.screen';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardScreen from './screens/auth/dashboard.screen';
import Header from './layout/Header';
import { ChartScreen } from './screens/auth/chart.screen';
import ScenariosScreen from './screens/auth/scenarios.screen';
import { HomeScreen } from './screens/unauth/home.screen';
import { useUserStore } from './store/users/user.store';

const MainLayout = () => (
  <>
    <Header />
    <div className='flex h-full p-4 w-full gap-4 mt-20'>
      <Navbar />
      <div className='ml-52'>
      <Outlet />
      </div>
    </div>
  </>
);

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <div className='text-white'>Erreur 404 ! Page non trouvée</div>
    ),
    children: [
      { index: true, element: <DashboardScreen /> },
      {
        path: '/scenarios',
        element: <ScenariosScreen />,
      },
      {
        path: '/scenarios/:id/:isCreate',
        element: <ChartScreen />,
      },
    ],
  },
]);

const unauthRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: (
      <div className='text-white'>Erreur 404 ! Page non trouvée</div>
    ),
    children: [{ index: true, element: <HomeScreen /> }],
  },
]);

function App() {
  const { accessToken } = useUserStore();

  return <RouterProvider router={accessToken ? authRouter : unauthRouter} />;
}

export default App;
