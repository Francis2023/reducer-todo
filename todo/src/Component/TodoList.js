import React, {useReducer} from "react";
import {Reducer, initialTodoState} from '../Reducers/Reducer';
import Card from 'react-bootstrap/Card'


function TodoList() {

    const [todoState, dispatch] = useReducer(Reducer, initialTodoState);
    
    return (
        <div>
            <h2>
                Todo: 
            </h2>
            {todoState.List.map(todo => (
            <Card style={{ width: '18rem' }}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE" })}
            >   
            <Card.Body>
                <Card.Title>
                   {todo.item}  
                   </Card.Title>

                   </Card.Body> 
                </Card>
             )) } 
        </div>
    )
}

export default TodoList;