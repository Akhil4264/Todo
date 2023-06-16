import React from 'react'
import Todo from './Todo'


const Todos = (props) => {
  return (
        <div className='container shadow p-3 mb-5 bg-white rounded'>
            {props.todos.length === 0 ? <h3 className='text-center' >No Tasks to display</h3> : props.todos.map((task)=>{
                return <Todo todoItem = {task} key={task.sno} delFunc = {props.delFunc}/>
            })
            }
        </div>
  )
}

export default Todos
