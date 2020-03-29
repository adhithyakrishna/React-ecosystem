import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

// todos is the props
// =[] is the default value for todos prop
const TodoList = ({ todos =[{id: 1, text: "hello"}, {id : 2, text:"Welcome"}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo=> <TodoListItem key = {todo.id} todo={todo}/>) }
    </div>
);

export default TodoList;