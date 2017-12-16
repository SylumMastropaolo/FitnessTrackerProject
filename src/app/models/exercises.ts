export class exercise {
    name: string;
    // description: string;
}

export class User {
    name: string = "";
    todoList: exercise[] = [];
    doneList: exercise[] = [];
}