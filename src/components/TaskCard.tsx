import React from 'react';
import ITaskCard from "../interface/ITaskCard";

const TaskCard: React.FC<ITaskCard> = ({ task, hidden,hiddenButt}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold">{task.name}</h2>
            <p>{task.description}</p>
            <p className={`text-${task.status.name === 'Completed' ? 'green' : 'red'}-500`}>
                Status: {task.status.name}
            </p>
            {hidden && <p>Assigned to: {task.createdByUserName}
                
                
                
                </p>}
       
            <p className="text-gray-500">Created At: {task.createdAt}</p>
            { hiddenButt && (
                <div className="mt-4">
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    
                    >
                        Modificar
                    </button>
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded"
                     
                    >
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
