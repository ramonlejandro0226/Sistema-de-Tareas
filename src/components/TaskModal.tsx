import React, { useState } from 'react';
import { createdTaskCreated} from '../services/taskServices';
import Task from '../interface/ITask';

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (task: Task) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onCreate }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState('Pending');
    const [assignedTo, setAssignedTo] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newTask = {
            name: taskName,               // Nombre de la tarea
            description: taskDescription,        // Descripción de la tarea
            status: { name: taskStatus},   // Estado de la tarea
            assignedToUser: [             // Asignados a la tarea (puedes dejarlo vacío si no hay asignados)
                // { userId: 'ID_DEL_USUARIO', taskId: 'ID_DE_LA_TAREA' }
            ],
            userName: assignedTo            // Nombre de usuario que está creando la tarea
        };
        
        
        try {
            const createdTask = await createdTaskCreated(newTask); // Llama a la función POST
            onCreate(createdTask); // Notifica al padre sobre la nueva tarea creada
            setTaskName('');
            setTaskDescription('');
            setTaskStatus('Pending');
            setAssignedTo('');
            onClose(); // Cierra el modal después de crear la tarea
        } catch (error) {
            console.error("Error creating task:", error);
            // Manejo del error si es necesario
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Crear Tarea</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre de la Tarea</label>
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descripción</label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Estado</label>
                        <select
                            value={taskStatus}
                            onChange={(e) => setTaskStatus(e.target.value)}
                            className="border rounded w-full py-2 px-3"
                        >
                            <option value="Pending">Pendiente</option>
                            <option value="In Progress">En Progreso</option>
                            <option value="Completed">Completada</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Asignar a</label>
                        <input
                            type="text"
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-300 px-4 py-2 rounded">Cancelar</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Crear Tarea</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
