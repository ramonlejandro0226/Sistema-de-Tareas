export default interface Task {
    id: string;
    name: string;
    description: string;
    createdByUserName: string;
    status: { name: string };
    createdAt: string;
  }
  