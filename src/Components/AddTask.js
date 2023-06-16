import React, { useState } from "react";



const AddTask = (props) => {
    const[title,SetTitle] = useState("")
    const[desc,SetDesc] = useState("")

    const Submit = (e)=>{
        e.preventDefault()
        props.addtask(title,desc)
        SetTitle("")
        SetDesc("")
    }

  return (
    <form className="container my-3" onSubmit={Submit}>
        <div className="form-floating mb-3">
            <input type="text" value={title} className="form-control" id="task" onChange={(e)=>{SetTitle(e.target.value)}} required/>
            <label htmlFor="task">Task</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" value={desc} className="form-control" id="Description" onChange={(e)=>SetDesc(e.target.value)} required/>
            <label htmlFor="Description">Description</label>
        </div>
        <input type="submit" value="Add Task" className='btn btn-sm btn-success'/>
    </form>
  );
}

export default AddTask
