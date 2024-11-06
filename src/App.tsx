import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { MainPage } from './pages/MainPages'; // Asegúrate de importar MainPage

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/login" replace />,  // Redirige al login por defecto
        },
        {
            path: "/login",
            element: <Login />,  // Página de inicio de sesión
        },
        {
            path: "/register",
            element: <Register />,  // Página de registro
        },
        {
            path: "/MainPage",
            element: <MainPage />,  // Página principal de tareas
        },
        {
            path: "*",
            element: <Navigate to="/login" replace />,  // Redirige a login si la ruta no existe
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
