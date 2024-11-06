// src/services/taskService.ts
import axios from 'axios';

const API_URL = 'https://localhost:7146/api/Tasks/my-Assigned tarea'; // Asegúrate de que esta sea la URL correcta

export const getTasks = async () => {
    try {
        const token = localStorage.getItem('token'); // Obtén el token del localStorage
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
            },
        });
            
        return response.data; // Retorna los datos de las tareas
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to load tasks"; // Maneja el error
    }
};
