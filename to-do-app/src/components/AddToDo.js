export default function AddToDo (props){
    return (
        <div id="input" className="input-container">
            <input id="input-el" type='text'></input>
            <button onClick={props.onAdd}>Add To Do</button>
        </div>
    )
}