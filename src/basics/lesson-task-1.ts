import axios from "axios";


const script_1 = () =>{
    
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    
    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }
    
    axios.get(url)
        .then(res => {
            const todo = res.data as Todo;
            const id = todo.id;
            const title = todo.title;
            const finished = todo.completed;
            logTodo(id, title, finished);
        });
    
    const logTodo = (id: number, title: string, completed: boolean) => {
        console.log(`
            My id is ${id}
            My title is ${title}
            I am ${completed}
        `);
    }

}

export default script_1;