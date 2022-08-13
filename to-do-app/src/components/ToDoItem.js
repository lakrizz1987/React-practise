import styles from "./ToDoItems.module.css"

export default function ToDoItem(props) {
    return (
        <li className={props.isDone ? styles.itemDone : ''}>{props.text} <button onClick={() => props.onDelete(props.id)}>Delete</button> <button onClick={(e) => props.onClick(props.id,e)}>✔</button></li>
    )
}