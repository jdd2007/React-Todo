import React from 'react'

const Todo = props => {
    return (
        <div>
            <div
                style={props.todo.completed ? {textDecoration: 'line-through' } : null }
                onClick={() => props.handleToggleComplete(props.todo.id)}
            >
                {props.todo.task}
            </div>
        </div>
    );
};

export default Todo;