import React from 'react'

const TodoForm = props => {
        return (
            <div>
                <form>
                    <input
                        onChange={props.handleTodoChange}
                        type="text"
                        name="todo"
                        value={props.value}
                        placeholder="...todo"
                    />
                    <button onClick={props.handleAddTodo}> Add Todo</button>
                    <button onClick={props.handleClearTodos}> Clear Todos</button>
                </form>
            </div>
        );
    };

    export default TodoForm;