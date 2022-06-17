import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, COMPLETE_TODO, DELETE_TODO, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, UPDATE_TODO } from "./todo.types";

const initialState = {
    addTodo:{
    loading: false,
    error: false,
    data: {},
    },
    getTodos:{
    loading: false,
    error: false,
    todo: [],
    }
}

export const todoReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case GET_TODO_LOADING: {
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                    loading:true
                }
            };
        }
        case GET_TODO_SUCCESS: {
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                    loading: false,
                    todo: payload,
                }
            };
        }
        case GET_TODO_ERROR: {
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                    loading: false,
                    error:true
                }
            };
        }
        case ADD_TODO_LOADING: {
            return {
                ...state,
                addTodo: {
                    ...state.addTodo,
                    loading: true,
                }
            };
        }
        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                addTodo: {
                    ...state.addTodo,
                    loading: false,
                    //data:payload,
                },
                getTodos: {
                    loading: false,
                    todo: [
                        ...state.getTodos.todo,
                        payload
                    ]
                }
            };
        }
        case ADD_TODO_ERROR: {
            return {
                ...state,
                addTodo: {
                    ...state.addTodo,
                    loading:false,
                    error: true
                }
            };
        }
        case DELETE_TODO: {
            return {
                ...state,
                getTodos: {
                    todo:[...state.getTodos.todo.filter((e) => e.id !== payload)]
                }
            };
        }
        case COMPLETE_TODO: {
            
            return {
                ...state,
                getTodos: {
                    todo: [...state.getTodos.todo.map((e) => {
                        if (e.id === payload.id) {
                            return payload
                        }
                        return e;
                    })]
                }
            };
        }
        case UPDATE_TODO: {
            
            return {
                ...state,
                getTodos: {
                    todo: [...state.getTodos.todo.map((e) => {
                        if (e.id === payload.id) {
                            return payload
                        }
                        return e;
                    })]
                }
            };
        }
        default: {
            return state;
        }
    }
}