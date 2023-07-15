'use client'
import React, { useReducer, useState } from 'react'

const reducer = (state , action) => {
    if(action.type === "ADD__TODO")  {
      return {
        name : [...state.name , {id: Date.now() , tdeext: action.payload}]
      }
    }
    else if(action.type === "DELETE") {
        return {
            name : state.name.filter((ele) => ele.id !== action.payload)
        }
    }
    else {
        return state
    }
  
}
const intialValue = {
    name : [],
   
}

const Reducer = () => {
 

    const [state , dispatch ] = useReducer(reducer , intialValue)
    const [todoTest , setTodoTest] = useState('')
    console.log(state)

    const handleAddButton = () => {
        if(!todoTest){return}
        dispatch({type : "ADD__TODO" , payload : todoTest})
        setTodoTest('')
    }
    const handleDeleteTodo = (e) => {
        dispatch({type : "DELETE" , payload : e })
    }
  return (
    <div>
          <div className='w-full h-[100vh] items-center justify-center flex'> 
          <div className='m-2'> 
            <input  className='w-[300px] p-2 border-2' onChange={(e) => {setTodoTest(e.target.value)}} value={todoTest} type='text' />
            <button onClick={handleAddButton} className='border p-2'>ADD</button>
            </div>
            <ul>
        {state.name.map((todo ) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
          </div>
    </div>
  )
}

export default Reducer