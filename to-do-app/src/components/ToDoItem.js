export default function ToDoItem(props) {
    return (
        <li>{props.text} <button onClick={() => props.onDelete(props.id)}>Delete</button></li>
    )
}