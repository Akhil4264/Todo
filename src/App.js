// import './App.css';
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import AddTask from "./Components/AddTask";
import React, { useState } from "react";


function App() {
	const [todos, SetTodos] = useState([
		// {
		//   sno: 1,
		//   title: "Go to market",
		//   description: "Buy fruits and tabs",
		// },
		// {
		//   sno: 2,
		//   title: "Go to office",
		//   description: "Buy fruits and tabs",
		// },
		// {
		//   sno: 3,
		//   title: "Go to mall",
		//   description: "Buy fruits and tabs",
		// },
	]);


	const DeleteTask = (task) => {

		SetTodos(todos.filter((e)=>{
			return e!==task
		}))
	};
	
	const addtask = (task,desc) =>{
		const newTask = {
			sno : todos.length+1,
			title : task,
			description : desc
		}
		SetTodos([...todos,newTask])
		// console.log(newTask)
		
	}


	return (
	<>
		<Navbar title="MyTodoList" searchBar={false} />
		<AddTask addtask = {addtask}/>
		<hr/>
		<Todos todos={todos} delFunc = {DeleteTask}/>
	</>
	);
}



export default App;
