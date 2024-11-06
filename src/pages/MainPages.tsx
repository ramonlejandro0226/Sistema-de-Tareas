import  { useEffect, useState } from 'react';
import { getTasks } from '../services/taskServices';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';

export const MainPage = () => {
    const [tasks, setTasks] = useState<{ name: string, description: string, createdByUserName: string, status: { name: string }, createdAt: string }[]>([]); // Estado para las tareas originales
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data.$values || data); // Ajusta según el formato de `data`
        } catch (err) {
            setError("Failed to load tasks.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [tasks]);

    // Función para manejar el cambio en el término de búsqueda
    const handleSearch = (value: string) => {
        setSearchTerm(value); // Actualiza el término de búsqueda
    };

    // Filtra las tareas según el término de búsqueda
    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase()),
    
    
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
            <SearchBar onSearch={handleSearch} />  
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.map(task => (
                   <TaskCard key={ task.name} task={task} />
                ))}
            </div>
        </div>
    );
};
