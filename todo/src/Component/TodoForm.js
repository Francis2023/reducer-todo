import React, {useState,useReducer} from "react";
import {Reducer, initialTodoState} from '../Reducers/Reducer';

function TodoForm() {

    const [todoState, dispatch] = useReducer(Reducer, initialTodoState);
    const [activity, setActivity] = useState(" ");

    const handleChanges = e => {
        setActivity(e.target.value);
    };

    return (
        <div>
            <input
              className="todo-input"
              type="text"
              name="newTodo"
              placeholder="Add new item"
              value={activity}
              onChange={handleChanges}
            />
            <button
              onClick={() => {
                  dispatch({ type: "UPDATE_TODOLIST", payload: activity})
              }}
            > 
             Add
             </button>
             <button
             onClick={() => {
                dispatch({ type: "CEAR_COMPLETED"})
            }}
             >
                 Clear Completed
             </button>
        
        </div>
       
    )
    
}
export default TodoForm;