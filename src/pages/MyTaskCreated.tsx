import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import useSearch from '../hooks/useSearch';
import Task from '../interface/ITask';
import { getMyTask } from '../services/taskServices';

export const MyTaskCreated = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const { searchTerm, loading, error, setSearchTerm, setLoading, setError } = useSearch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchTasks = async () => {
        try {
            const data = await getMyTask();
            setTasks(data.$values || data);
        } catch (err) {
            setError("Failed to load tasks.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCreateTask = (newTask: Task) => {
        setTasks([newTask, ...tasks]);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-10">

            <div className='flex flex-col gap-15 flex-wrap'>
                <h1 className="text-2xl font-bold mb-4 ">My Task Created </h1>
                <SearchBar onSearch={handleSearch} />
                <Button text='New Task' onClick={() => setIsModalOpen(true)}  />
            <Link  to='/yourTasks'>
                <Button text='your task' />
            </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.map(task => (
                    <TaskCard key={task.id} task={task} hidden={false} hiddenButt={true} />
                ))}
            </div>

            <TaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateTask}
            />
        </div>
    );
};
