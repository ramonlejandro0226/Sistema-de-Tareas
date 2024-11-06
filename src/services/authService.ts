import axios from 'axios';

const API_URL = 'https://localhost:7146/api/Users';

export const login = async (email: string, PasswordHash: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      PasswordHash,
    });
    return response.data; // Retorna el token o cualquier dato de éxito necesario
  } catch (error: any) {
    console.error(error.response?.data);
    throw error.response?.data?.message || "Failed to log in";
  }
};

export const register = async (name: string, email: string, passwordHash: string ) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        passwordHash,
        role: {
          name: "user"
        }
      });
    return response.data; // Retorna los datos de éxito
  } catch (error: any) {
    console.error(error.response?.data);
    throw error.response?.data?.message || "There was an issue with your registration.";
  }
};
