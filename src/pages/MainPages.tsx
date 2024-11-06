import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/TaskServices'; // Importa tu servicio para obtener tareas
import TaskCard from '../components/TaskCard'; // Componente para mostrar cada tarea

export const MainPage = () => {
    const [tasks, setTasks] = useState<{ name: string, description: string, createdByUserName: string, status: { name: string }, createdAt: string }[]>([]);  // Cambia status a un objeto con name
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTasks = async () => {
        try {
            const data = await getTasks(); // Llama a tu servicio para obtener tareas
            setTasks(data.$values); // Asegúrate de que el servicio devuelva un objeto con una propiedad value
            console.log(data.$values) // Asigna las tareas obtenidas
        } catch (err) {
            setError("Failed to load tasks."); // Maneja el error
        } finally {
            setLoading(false); // Cambia el estado de carga
        }
    };

    useEffect(() => {
        fetchTasks(); // Llama a la función para obtener tareas
    }, []); // Asegúrate de que las dependencias estén vacías

    if (loading) {
        return <div>Loading...</div>; // Mensaje de carga
    }

    if (error) {
        return <div className="text-red-500">{error}</div>; // Mensaje de error
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map(task => (
                   <TaskCard key={task.name} task={task} />
                   // Asegúrate de tener un componente TaskCard
                ))}
            </div>
        </div>
    );
};
