import React, { useState } from "react";

const Home = () => {
	const[todos, setTodos] = useState([])
	const createTodo=(e)=>{
		e.preventDefault()
		let newTodo={
			"label":e.target.todoInput.value,
			"done":false
		}
		let isNew= true
		todos.forEach((todo)=>{
			if(todo.label.toLowerCase()===newTodo.label.toLowerCase()){
				isNew=false
			}
		})
		// in case there is a duplicate
		isNew ? setTodos([...todos,newTodo]) : alert("Todo already exists! Please enter a new Todo.")
		e.target.todoInput.value=""
	}
	const removeTodo = (e,index)=>{
		e.preventDefault()
		let filteredTodos= todos.filter((todo,i)=>{
			return i !== index
		})
		setTodos(filteredTodos)
	}

	return (
		<div className="text-center">
			<form onSubmit={createTodo}> 
				<input name="todoInput" type="text" placeholder="Enter a Todo"/>
			</form>
			<ul>
				{todos.map((todo,index)=>{
					return(
						<li key={index}>
							<span>{todo.label}</span>
							<button onClick={(e)=>removeTodo(e,index)}>Delete</button>
						</li>

					)
				})}
			</ul>
		</div>
	);
};

export default Home;