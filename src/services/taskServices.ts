
import axios from 'axios';
import Task from '../interface/ITask';

const API_URL = 'https://localhost:7146/api/tasks'; 

export const getTasks = async () => {
    try {
        const token = localStorage.getItem('token'); // Obtén el token del localStorage
        const response = await axios.get(`${API_URL}/my-Assigned tarea`, {
            headers: {
                Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
            },
        });
            
        return response.data; // Retorna los datos de las tareas
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to load tasks"; // Maneja el error
    }
};




export const getMyTask = async () => {
    try {
        const token = localStorage.getItem('token'); // Obtén el token del localStorage
        const response = await axios.get(`${API_URL}/my-tasks`, {
            headers: {
                Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
            },
        });


            
        return response.data; // Retorna los datos de la tarea
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to load task"; // Maneja el error
    }
};











export const createdTaskCreated = async (newTask: { 
    name: string; 
    description: string; 
    status: { name: string }; 
    userName: string; 
    assignedToUser: Array<{ userId?: string; taskId?: string }> 
}) => {
    try {
        const token = localStorage.getItem('token'); // Obtén el token del localStorage
        const response = await axios.post(`${API_URL}/Created-Task`, newTask, {
            headers: {
                Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
            },
        });

        console.log(response.data);
            
        return response.data; // Retorna los datos de la tarea creada
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to create task"; // Maneja el error
    }
};





export const deleteTask = async (taskId: string) => {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    if (!token) {
        throw new Error("No token found. Please log in.");
    }
    const response = await axios.delete(`${API_URL}/${taskId}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
        },
    });
    return response.data; // Asegúrate de que la respuesta sea la esperada
};
