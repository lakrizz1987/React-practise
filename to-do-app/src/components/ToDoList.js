import React from "react"
import ToDoItem from "./ToDoItem"
import AddToDo from "./AddToDo";
import uniqid from "uniqid";

export default function ToDoList() {
    let [todos, setTodos] = React.useState([{ id: 1, text: 'Clean your room' }, { id: 2, text: 'Learn React' }, { id: 3, text: 'Go to the Mall' }])

    function deleteHandler(id) {
        setTodos(state => state.filter(x => x.id !== id));
    };

    function addHandler(e) {
        const newToDoText = e.target.parentNode.querySelector('input#input-el').value;
        
        if(newToDoText !== ''){
            const newTodo = { id: uniqid(), text: newToDoText };
        setTodos(state => {
            return [
                ...state,
                newTodo
            ]
        });
        e.target.parentNode.querySelector('input#input-el').value = '';
        }
    };

    return (
        <>
            <AddToDo onAdd={addHandler} />
            <ul>
                {todos.map(x => <ToDoItem id={x.id} onDelete={deleteHandler} key={x.id} text={x.text} />)}
            </ul>
        </>

    );
};