import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { MyTaskCreated } from './pages/MyTaskCreated';
import { YourTasks } from './pages/YourTasks';

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
            path: "/yourTasks",
            element: <YourTasks />,  // Página principal de tareas
        },
        {
            path: "*",
            element: <Navigate to="/login" replace />,  // Redirige a login si la ruta no existe
        },
        {
            path: "/MyTaskCreated",
            element: <MyTaskCreated />,  
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
