
export const initialTodoState = {
    
    List: [
    {item: 'Learn about reducers',
    completed: false,
    id: 123 }
    ]
}

export const Reducer = (state,action) => {
    
    switch(action.type) {

        case "TOGGLE_COMPLETE":
            return {
               ...state,
               completed: !state.completed 
            };

        case "UPDATE_TODOLIST":
            return {
                ...state,
                List: [
                    ...state.List,
                {item: action.payload, 
                 completed: false, 
                 id: (Math.random() * Math.random()).toString(9).substr(2, 9)}
                ]
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                item: state.completed
            };
    
    default:

    return state;
 }
};