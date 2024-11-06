export default interface ITaskCard {

    task:{
        name: string,
        description: string,
        createdByUserName: string,
        status:{
            name: string,
        },
        createdAt: string,
    };

}

