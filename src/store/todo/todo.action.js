import axios from "axios";
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, COMPLETE_TODO, DELETE_TODO, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, UPDATE_TODO } from "./todo.types";


// todo app
export const getTodosAPI =() => (dispatch) => {
    // before api calling waiting time
    dispatch({ type: GET_TODO_LOADING })

    axios.get("http://localhost:8080/todos")
        .then((r) => {
        // loading ends
        // success
        dispatch({ type: GET_TODO_SUCCESS, payload: r.data })
    })
        .catch(() => {
        // loading ends
        // error is there
        dispatch({ type: GET_TODO_ERROR })
    })
    
}
export const todoAddAPI = (payload) => (dispatch) => {
    // before api calling waiting time
    dispatch({ type: ADD_TODO_LOADING })

    axios.post("http://localhost:8080/todos",payload)
        .then((r) => {
        
        // loading ends
        // success
        dispatch({ type: ADD_TODO_SUCCESS, payload: r.data })
    })
        .catch(() => {
        // loading ends
        // error is there
        dispatch({ type: ADD_TODO_ERROR })
    })
    
}

export const todoComplete = (payload) => (dispatch) => {
    axios.put(`http://localhost:8080/todos/${payload.id}`,{...payload})
            .then((r) => {
                console.log('r:', r)
                dispatch({ type: COMPLETE_TODO,payload:r.data })
            });
}
export const todoUpdate = (payload) => (dispatch) => {
    axios.put(`http://localhost:8080/todos/${payload.id}`,{...payload})
            .then((r) => {
                console.log('r:', r)
                dispatch({ type: UPDATE_TODO,payload:r.data })
            });
}

export const todoRemove = (payload) => (dispatch) => {
    axios.delete(`http://localhost:8080/todos/${payload}`)
        .then((r) => {
        
        dispatch({ type: DELETE_TODO, payload: payload })
    })
}


// loading ?
// error ?
// todos ...