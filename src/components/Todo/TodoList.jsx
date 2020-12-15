import React,{useState , useRef} from 'react';
import './HomeTodo.css';

const TodoList = (props) => {
    const [isEdit , setIsEdit] = useState(false);
    const inputRef = useRef(null);

    const toggleEditing = () =>{
        setIsEdit(!isEdit);
    }
    if(isEdit){
        return (
        <li>
            <input type="text" ref={inputRef} defaultValue={props.text} className="input-text"></input>
            <button className="btn" onClick={() =>{props.editTodoFromList(props.id, inputRef); toggleEditing()}}> Save </button>
            <button className="btn" onClick={toggleEditing} >Cancel</button>
        </li>
        )
    }
    return (
        <>
            <li>{props.text}
            <button className ="btn" onClick={()=>{
                props.deleteTodoFromList(props.id);
            }} > Delete</button>
            <button className ="btn" onClick={toggleEditing}> 
            Edit</button>
            </li>
        </>
    );
}

export default TodoList;
