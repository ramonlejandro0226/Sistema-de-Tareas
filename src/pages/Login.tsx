import { Link, useNavigate } from "react-router-dom"

import Button from "../components/Button";
import { login } from "../services/authService";
import CustomInput from "../components/CustomInput";
import useFormInput from "../hooks/useFormInput";


export const Login = () => {
    const {  email, password, error, setError, handleChange } = useFormInput();
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Resetea el error antes de un nuevo intento
    
        try {
          // Llama a la función login del servicio
          const data = await login(email, password);
          alert("Login successful!");
          
          // Almacena el token JWT en localStorage
          localStorage.setItem("token", data.token);
          
          // Redirige a la página de tareas
          navigate("/MainPage");
        } catch (err: any) {
          // Maneja el error de autenticación
          setError(err || "Failed to log in");
        }
      };

  return (
   <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Welcome Back
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <i className="fas fa-at text-blue-500"></i>
                  </div>
                  <CustomInput id="email" type="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email" />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <i className="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>
                    <CustomInput id="password" type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" />
                </div>
              </div>

              {error && <div className="text-red-500 mb-4">{error}</div>}

              <div className="flex w-full">
               <Button text="Sign In"/>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
            <span className="ml-2">
              You don't have an account?
              <Link
                to={"/register"}
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                Registrate aqui
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
