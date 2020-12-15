import React ,{useState} from 'react';
import './HomeTodo.css'; 
import TodoList from './TodoList';

const HomeTodo = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoList , setTodoList] = useState([]);

    const addTodoInput = (e) => {
        setInputValue(e.target.value);
    };

    const addTodoInList = () =>{
        setTodoList((oldList) => {
            return[...oldList , inputValue]
        });
        setInputValue("");
    };

    const deleteTodoFromList = (id) => {
        console.log("item deleted");
        setTodoList((oldList) => {
            return oldList.filter((arrElem , index) => {
                return index !== id;
            });
        });
    }

    const editTodoFromList = (id , inputRef) =>{
        console.log(id);
        console.log(inputRef.current.value);
        setTodoList( todoList.map((item , index) => {
            if(index === id)
            {
                item = inputRef.current.value;
            }
            return item
        }));
    }

    return (
        <div className="root-container">
                <div className="container">
                    <h1 className="app-title"> ToDo List</h1>
                    Add Todo Here........
                    <br/>
                    <input type="text" placeholder="Write a Todo" 
                    className="input-text" required value ={inputValue} onChange={addTodoInput}/>
                    
                    <button className="add-btn" disabled={!inputValue} onClick={addTodoInList} >Add Todo</button>

                    <div className="list">
                        <ol>
                            {
                            todoList.map((item , index) => {
                                return <TodoList 
                                key = {index}
                                id = {index}
                                text = {item}
                                deleteTodoFromList = {deleteTodoFromList} 
                                editTodoFromList = {editTodoFromList}
                            />
                            })
                            }
                        </ol>
                    </div>
                </div>
            </div>
    );
}

export default HomeTodo;