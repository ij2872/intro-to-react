import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { isTemplateElement } from '@babel/types';

export default function TodoList(props){
    const [todoList, setTodoList] = useState(
        [
            {
                title: "Clean up house",
                createdAt: 1568496519860,
                isCompleted: false
            },
            {
                title: "Calculus homework",
                createdAt: 1568496519960,
                isCompleted: false
            },
            {
                title: "Feed Dog",
                createdAt: 1568497236045,
                isCompleted: false
            }
        ]
    );

    const [todoInput, setTodoInput] = useState('');
    
    const [apiData, setApiData] = useState({});
    useEffect(() => {
        async function fetchData(){
            const apiResponse = await axios('https://dog.ceo/api/breeds/image/random');
            setApiData(apiResponse.data);
            console.log(apiResponse);
        }
        fetchData();
    }, []);

    function handleDelete(e){
        let newTodoList = todoList.filter(todo => todo.title !== e);
        setTodoList(newTodoList);
    }

    function handleInputAdd(elem){
        setTodoInput(elem.target.value);
    }
    
    function handleCheckbox(todoTitle){
        let todoListCopy = todoList.map((todo) => {
            if(todo.title === todoTitle){
                todo.isCompleted = !todo.isCompleted;
                return todo;
            }
            return todo;
        });

        setTodoList(todoListCopy);
    }

    function addTodo(){
        if(todoInput.length > 0){
            let newTodoList = [...todoList, {
                title: todoInput,
                createdAt: new Date().getTime(),
                isCompleted: false
            }];

            setTodoInput('');
            setTodoList(newTodoList);
        }
        
    }

    function handleEnter(e){
        if(e.key === 'Enter'){
            addTodo();
        }
    }

    return (
        <div className="todo-container">
        <h1>{props.title}</h1>
            <div className="todo-add">
                <div className="add-input-container">
                    <input className="add-input-text" type="text" placeholder="Add a todo" value={todoInput} onChange={handleInputAdd} onKeyDown={handleEnter}/>
                    <Button className="add-input-button" onClick={addTodo}>Add</Button>
                </div>
            </div>
            <div className="todo-tasks">
            {
                todoList.map((todo) => (
                    <div className={todo.isCompleted ? "task completed" : "task"} key={todo.title + todo.id}>
                        <input className="task-checkbox" type="checkbox" onClick={() => {handleCheckbox(todo.title)}}/>
                        <p className="task-title">{todo.title}</p>
                        <Button className="task-delete" type="button" size="sm" value="Delete" color="danger" onClick={(element => handleDelete(todo.title))}>Delete</Button>{' '}
                    </div>  
                ))
            }
            </div> 
            <img src={apiData.message}/>
        </div>
    );
};
