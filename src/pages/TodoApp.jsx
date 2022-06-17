import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAPI, todoAddAPI, todoComplete, todoRemove, todoUpdate } from '../store/todo/todo.action';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const input = useRef()
  const dispatch = useDispatch();
  const {loading,error,todo} = useSelector((state) => state.todo.getTodos);
  const { loading: addBtnLoading } = useSelector((state) => {
    return state.todo.addTodo
  });

  const [inputEdit, setInputEdit] = useState(false)
  const [editId, setEditId] = useState("")

  useEffect(() => {
    dispatch(getTodosAPI())
  }, [])
  
  const addNew = () => {
    let value = input.current.value
    //console.log('value:', value)
    dispatch(todoAddAPI({
      value: value,
      isCompleted: false,
    }))
    input.current.value = "";
  }

  const markTodo = (todo) => {
    dispatch(todoComplete({
      ...todo,
      isCompleted: !todo.isCompleted,
    }))
  }

  const deleteTodo = (id) => {
    dispatch(todoRemove(id))
  }

  const showInput = (id) => {
    setEditId(id);
    setInputEdit(true);
  }

  const editTodo = (todo) => {
    dispatch(todoUpdate({
      ...todo,
      value: input.current.value,
    }))
    setInputEdit(false);

  }

  if (loading) return <h1>Loading....</h1>
  else if (error) return <h1>Somthing went wrong</h1>
  return (
    <div style={{ backgroundColor: "teal" }}>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">

              <div class="card">
                <div class="card-body p-5">

                  <form class="d-flex justify-content-center align-items-center mb-4">
                    <div class="form-outline flex-fill">
                      <input type="text" id="form2" class="form-control" ref={input} placeholder="Type here..." />
                      
                    </div>
                    <button type="submit" class="btn btn-info ms-2" onClick={addNew} disabled={addBtnLoading}>Add</button>
                  </form>
                  
                  {
                    todo.map((todo) => (
                      <div class="tab-content" id="ex1-content" key={todo.id}>
                        <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                          aria-labelledby="ex1-tab-1">
                          <ul class="list-group mb-0">
                            <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                            >
                              <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." onClick={() => markTodo(todo)} checked={todo.isCompleted} />
                              {inputEdit && (editId === todo.id) ? <div style={{ width:"100%",display: "flex", margin: "auto" }}>
                                <input ref={input} />
                                <button onClick={() => editTodo(todo)} style={{ marginRight: "10px" }}>{"Add"}</button>
                              </div> : <div style={{ width: "100%", display:"flex",margin:"auto"}}>
                                <p style={{ margin: "auto", textDecoration: todo.isCompleted ? "line-through" : "" }} >{todo.value}</p>
                                <button onClick={() => showInput(todo.id)} style={{ marginRight: "10px" }}>{"Edit"}</button>
                              </div>}
                              {/* <button onClick={() => inputEdit ? showInput(todo.id) : editTodo(todo)} style={{ marginRight: "10px" }}>{inputEdit ? "Add":"Edit" }</button> */}
                              <button onClick={() => deleteTodo(todo.id)}>Remove</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TodoApp