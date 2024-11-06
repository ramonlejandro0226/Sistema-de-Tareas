import ITaskCard from "../interface/ITaskCard";

const TaskCard: React.FC<ITaskCard> = ({ task }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold">{task.name}</h2>
            <p>{task.description}</p>
            <p className={`text-${task.status.name === 'Completed' ? 'green' : 'red'}-500`}>
                Status: {task.status.name}
            </p>
            <p className="text-gray-500">created by {task.createdByUserName}</p>
            <p className="text-gray-500">Created At: {task.createdAt}</p>
        </div>
    );
};
 export default TaskCard;