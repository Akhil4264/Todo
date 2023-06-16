import React from 'react'


const Todo = ({todoItem,delFunc}) => {
  return (
    <>
    <div className='container p-3 my-3 rounded text-white bg-black'>
      <h3>{todoItem.title}</h3>
      <p>{todoItem.description}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>delFunc(todoItem)}>Delete Task</button>
    </div>
    </>
  )
}

export default Todo
