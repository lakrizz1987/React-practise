import React from "react"
import ToDoItem from "./ToDoItem"
import AddToDo from "./AddToDo";
import uniqid from "uniqid";

export default function ToDoList() {
    let [todos, setTodos] = React.useState([{ id: 1, text: 'Clean your room', isDone: false }, { id: 2, text: 'Learn React', isDone: false }, { id: 3, text: 'Go to the Mall', isDone: false }])

    function deleteHandler(id) {
        setTodos(state => state.filter(x => x.id !== id));
    };

    function addHandler(e) {
        const newToDoText = e.target.parentNode.querySelector('input#input-el').value;

        if (newToDoText !== '') {
            const newTodo = { id: uniqid(), text: newToDoText, isDone: false };
            setTodos(state => {
                return [
                    ...state,
                    newTodo
                ]
            });
            e.target.parentNode.querySelector('input#input-el').value = '';
        }
    };

    function lineThrougthHandler(id, e) {
        setTodos(state => {
          return  state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            })
        });

        if (e.target.textContent === '✔') {
            e.target.textContent = '↺'
        } else {
            e.target.textContent = '✔'
        }


    }

    return (
        <>
            <AddToDo onAdd={addHandler} />
            <ul>
                {todos.map(x => <ToDoItem isDone={x.isDone} id={x.id} onClick={lineThrougthHandler} onDelete={deleteHandler} key={x.id} text={x.text} />)}
            </ul>
        </>

    );
};