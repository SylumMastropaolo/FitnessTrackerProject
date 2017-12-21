export class exercise {
    name: string;
    // description: string;
}

export class User {
    id: number;
    name: string;
    todoList: exercise[] = [];
    doneList: exercise[] = [];
}

// export class Users {
//     users: User[] = [];
// }