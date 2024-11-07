export default interface ITaskCard {

    task:{
        id : string,
        name: string,
        description: string,
        createdByUserName: string,
        status:{
            name: string,
        },
        createdAt?: string,
      
        
    };
    hidden?: boolean,
    hiddenButt?: boolean
   

    onEdit?: (task: any) => void;
    onDelete?: (taskId: string) => void;

}

